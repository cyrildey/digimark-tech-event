import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // for JSON endpoints (projects)

// Serve static frontend and uploads for convenience (single origin testing)
const wwwDir = path.resolve(repoRoot, 'www');
app.use('/uploads', express.static(path.join(wwwDir, 'uploads')));
app.use(express.static(wwwDir));

// Postgres pool
const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

// Ensure upload dir exists
const uploadDir = path.resolve(repoRoot, process.env.UPLOAD_DIR || 'www/uploads');
await fs.ensureDir(uploadDir);

// Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  }
});
const upload = multer({ storage });

// Helper to parse JSON fields safely
function parseJsonField(str, fallback = []) {
  if (typeof str !== 'string') return fallback;
  try { const v = JSON.parse(str); return Array.isArray(v) ? v : fallback; } catch { return fallback; }
}

// POST /api/intern-profiles
app.post('/api/intern-profiles', upload.fields([
  { name: 'profile_picture', maxCount: 1 },
  { name: 'cv_file', maxCount: 1 },
]), async (req, res) => {
  const b = req.body;
  const files = req.files || {};
  const profilePic = (files.profile_picture?.[0]) || null;
  const cvFile = (files.cv_file?.[0]) || null;

  const languages = parseJsonField(b.languages, []);
  const frameworks = parseJsonField(b.frameworks, []);
  const tools = parseJsonField(b.tools, []);

  const profile_picture_url = profilePic ? path.posix.join('/', path.relative(path.resolve(repoRoot, 'www'), profilePic.path).split(path.sep).join('/')) : null;
  const cv_file_url = cvFile ? path.posix.join('/', path.relative(path.resolve(repoRoot, 'www'), cvFile.path).split(path.sep).join('/')) : null;

  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO internprofiles (
        intern_name, intern_position, intern_school, intern_bio, intern_email,
        github_url, facebook_url, linkedin_url, twitter_url, instagram_url,
        profile_picture_url, cv_file_url,
        internship_description, internship_quote,
        languages, frameworks, tools,
        job_title, company_name, job_duration, job_description,
        degree, education_details
      ) VALUES (
        $1,$2,$3,$4,$5,
        $6,$7,$8,$9,$10,
        $11,$12,
        $13,$14,
        $15::jsonb,$16::jsonb,$17::jsonb,
        $18,$19,$20,$21,
        $22,$23
      ) RETURNING id;`,
      [
        b.intern_name || null,
        b.intern_position || null,
        b.intern_school || null,
        b.intern_bio || null,
        b.intern_email || null,
        b.github_url || null,
        b.facebook_url || null,
        b.linkedin_url || null,
        b.twitter_url || null,
        b.instagram_url || null,
        profile_picture_url,
        cv_file_url,
        b.internship_description || null,
        b.internship_quote || null,
        JSON.stringify(languages),
        JSON.stringify(frameworks),
        JSON.stringify(tools),
        b.job_title || null,
        b.company_name || null,
        b.job_duration || null,
        b.job_description || null,
        b.degree || null,
        b.education_details || null,
      ]
    );

    res.status(201).json({ id: result.rows[0].id });
  } catch (err) {
    console.error('DB insert error:', err);
    res.status(500).send('Failed to save profile');
  } finally {
    client.release();
  }
});

// POST /api/intern-projects
app.post('/api/intern-projects', async (req, res) => {
  const { intern_profile_id, projects } = req.body || {};
  if (!intern_profile_id || !Array.isArray(projects)) {
    return res.status(400).send('Invalid payload');
  }

  const projectsJsonPath = path.resolve(repoRoot, process.env.PROJECTS_JSON || 'www/database/intern_profile_projects.json');
  await fs.ensureFile(projectsJsonPath);

  // Load current
  let data = { _meta: { description: 'Projects associated with intern profile submissions.', version: 1 }, projects: [] };
  try {
    const raw = await fs.readFile(projectsJsonPath, 'utf8');
    data = JSON.parse(raw || '{}') || data;
    if (!Array.isArray(data.projects)) data.projects = [];
  } catch {}

  // Save any data URL images as files in uploadDir and set project_image_url
  const savedProjects = [];
  for (const p of projects) {
    let project_image_url = null;
    if (p.project_image_data_url && typeof p.project_image_data_url === 'string' && p.project_image_data_url.startsWith('data:')) {
      const match = p.project_image_data_url.match(/^data:(.*?);base64,(.*)$/);
      if (match) {
        const mime = match[1];
        const base64 = match[2];
        const ext = (mime.split('/')[1] || 'png').split('+')[0];
        const filename = `${uuidv4()}.${ext}`;
        const absPath = path.join(uploadDir, filename);
        await fs.writeFile(absPath, Buffer.from(base64, 'base64'));
        project_image_url = path.posix.join('/', path.relative(path.resolve(repoRoot, 'www'), absPath).split(path.sep).join('/'));
      }
    }

    savedProjects.push({
      intern_profile_id,
      project_title: p.project_title || '',
      project_description: p.project_description || '',
      tech_stack: Array.isArray(p.tech_stack) ? p.tech_stack : [],
      project_duration: p.project_duration || '',
      project_role: p.project_role || '',
      demo_url: p.demo_url || '',
      source_url: p.source_url || '',
      project_image_url,
      created_at: new Date().toISOString()
    });
  }

  data.projects.push(...savedProjects);
  await fs.writeFile(projectsJsonPath, JSON.stringify(data, null, 2), 'utf8');

  res.status(201).json({ saved: savedProjects.length });
});

// GET individual profile by ID
app.get('/api/intern-profiles/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).send('Invalid id');
  try {
    const { rows } = await pool.query('SELECT * FROM internprofiles WHERE id=$1', [id]);
    if (!rows.length) return res.status(404).send('Not found');
    res.json(rows[0]);
  } catch (err) {
    console.error('DB fetch error:', err);
    res.status(500).send('Failed to fetch');
  }
});

// GET portfolio: profile + projects
app.get('/api/intern-portfolios/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).send('Invalid id');

  try {
    const { rows } = await pool.query('SELECT * FROM internprofiles WHERE id=$1', [id]);
    if (!rows.length) return res.status(404).send('Not found');
    const profile = rows[0];

    const projectsJsonPath = path.resolve(repoRoot, process.env.PROJECTS_JSON || 'www/database/intern_profile_projects.json');
    let projectsData = { projects: [] };
    try {
      const raw = await fs.readFile(projectsJsonPath, 'utf8');
      projectsData = JSON.parse(raw || '{}') || projectsData;
      if (!Array.isArray(projectsData.projects)) projectsData.projects = [];
    } catch {}

    const projects = projectsData.projects.filter(p => Number(p.intern_profile_id) === id);

    res.json({ profile, projects });
  } catch (err) {
    console.error('Portfolio fetch error:', err);
    res.status(500).send('Failed to fetch');
  }
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

