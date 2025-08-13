-- Step 2: Create Tables
DROP TABLE IF EXISTS "User" CASCADE;
DROP TABLE IF EXISTS Interns CASCADE;
DROP TABLE IF EXISTS Admins CASCADE;
DROP TABLE IF EXISTS Parents CASCADE;
DROP TABLE IF EXISTS Supervisors CASCADE;
DROP TABLE IF EXISTS ParentInterns CASCADE;
DROP TABLE IF EXISTS InternshipPositions CASCADE;
DROP TABLE IF EXISTS InternshipApplications CASCADE;
DROP TABLE IF EXISTS Tasks CASCADE;
DROP TABLE IF EXISTS AssignedTasks CASCADE;
DROP TABLE IF EXISTS Attendances CASCADE;
DROP TABLE IF EXISTS PaymentHistorys CASCADE;
DROP TABLE IF EXISTS Periods CASCADE;
DROP TABLE IF EXISTS Timetables CASCADE;
DROP TABLE IF EXISTS CleaningGroups CASCADE;
DROP TABLE IF EXISTS CleaningRosters CASCADE;
DROP TABLE IF EXISTS Equipments CASCADE;
DROP TABLE IF EXISTS EquipmentsBorrowed CASCADE;
DROP TABLE IF EXISTS Documents CASCADE;
DROP TABLE IF EXISTS Certificates CASCADE;
DROP TABLE IF EXISTS Messages CASCADE;
DROP TABLE IF EXISTS VideoTutorial CASCADE;
DROP TABLE IF EXISTS Quizes CASCADE;
DROP TABLE IF EXISTS Questions CASCADE;
DROP TABLE IF EXISTS Projects CASCADE;
DROP TABLE IF EXISTS AssignedProjects CASCADE;
DROP TABLE IF EXISTS Reports CASCADE;


-- Step 1: Define ENUM types (PostgreSQL requires ENUMs to be defined first)
CREATE TYPE internship_type AS ENUM ('Online', 'Onsite');
CREATE TYPE application_status AS ENUM ('Pending', 'Accepted', 'Rejected', 'Under Review');
CREATE TYPE task_status AS ENUM ('Pending', 'Completed');
CREATE TYPE question_type AS ENUM ('mcq', 'file', 'structural');
CREATE TYPE project_status AS ENUM ('completed', 'Pending');
CREATE TYPE attendance_status AS ENUM('Present', 'Absent', 'Late');
CREATE TYPE equipmentsBorrowed_status AS ENUM('Returned', 'Borrowed');

-- Step 2: Create Tables
/*
CREATE TABLE "User" (
    user_id SERIAL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/
CREATE TABLE Interns (
    id SERIAL PRIMARY KEY,                  -- Unique ID for each intern
    user_id INT NOT NULL,
    fullname VARCHAR(255) NOT NULL,         -- Full Name of the intern
    dob DATE NOT NULL,                       -- Date of Birth
    school_name VARCHAR(255) NOT NULL,       -- School Name
    department VARCHAR(100) NOT NULL,        -- Department or Specialty
    level INT NOT NULL,                      -- Level (1, 2, 3, 4)
    region VARCHAR(100) NOT NULL,            -- Region (Center, East, etc.)
    town VARCHAR(100) NOT NULL,              -- Town
    quarter VARCHAR(100) NOT NULL,           -- Quarter
    --email VARCHAR(255) NOT NULL UNIQUE,      -- Email address is store in user table of di_learn db
    --phone VARCHAR(20) NOT NULL,              -- Phone number
    --password VARCHAR(255) NOT NULL,          -- Password is store in user table of di_learn db
    additional_info TEXT,                    -- Any additional information (optional)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp of when the record was created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp of the last update
);


CREATE TABLE Admins (
        id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Parents (
        id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Supervisors (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE ParentInterns (
    id SERIAL PRIMARY KEY,
    parent_id INT,
    intern_id INT,
    FOREIGN KEY (parent_id) REFERENCES Parents(id) ON DELETE SET NULL,
    FOREIGN KEY (intern_id) REFERENCES Interns(id) ON DELETE SET NULL,
    UNIQUE(parent_id,intern_id)
);

CREATE TABLE InternshipPositions (
    id SERIAL PRIMARY KEY,
    created_by INT,
    title_en VARCHAR(100) NOT NULL,
    title_fr VARCHAR(100) NOT NULL,
    description_en TEXT NOT NULL,
    description_fr TEXT NOT NULL,
    type internship_type NOT NULL,
    specialty_id INT,
    duration VARCHAR(50),
    amount INT NOT NULL,
    start_date DATE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES Admins(id) ON DELETE SET NULL
);

CREATE TABLE InternshipApplications (
    id SERIAL PRIMARY KEY,
    internshipPosition_id INT,
    intern_id INT,
    level_of_education VARCHAR(200),
    status application_status DEFAULT 'Pending',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (internshipPosition_id) REFERENCES InternshipPositions(id) ON DELETE SET NULL,
    UNIQUE (intern_id, internshipPosition_id)
);

CREATE TABLE Tasks (
    id SERIAL PRIMARY KEY,
    assigned_by INT ,
    internshipPosition_id INT ,
    description TEXT NOT NULL,
    due_date DATE NOT NULL,
    status task_status DEFAULT 'Pending',
    FOREIGN KEY (assigned_by) REFERENCES Supervisors(id) ON DELETE SET NULL,
    FOREIGN KEY (internshipPosition_id) REFERENCES InternshipPositions(id) ON DELETE SET NULL
);

CREATE TABLE AssignedTasks (
    id SERIAL PRIMARY KEY,
    task_id INT,
    assigned_to INT,
    completion_rate INT DEFAULT 0,
    FOREIGN KEY (task_id) REFERENCES Tasks(id) ON DELETE SET NULL,
    FOREIGN KEY (assigned_to) REFERENCES Interns(id) ON DELETE SET NULL
);

CREATE TABLE Attendances (
    id SERIAL PRIMARY KEY,
    intern_id INT ,
    internshipPosition_id INT ,
    status attendance_status DEFAULT 'Present',
    FOREIGN KEY (intern_id) REFERENCES Interns(id) ON DELETE CASCADE,
    FOREIGN KEY (internshipPosition_id) REFERENCES InternshipPositions(id) ON DELETE CASCADE
);

CREATE TABLE PaymentHistorys (
    id SERIAL PRIMARY KEY,
    ref VARCHAR(200),
    internshipPosition_id INT ,
    intern_id INT,
    amount INT NOT NULL,
    payedDate DATE,
    FOREIGN KEY (internshipPosition_id) REFERENCES InternshipPositions(id) ON DELETE SET NULL,
    FOREIGN KEY (intern_id) REFERENCES Interns(id) ON DELETE SET NULL
);

CREATE TABLE Periods (
    id SERIAL PRIMARY KEY,
    start_time Time,
    end_time Time
);

CREATE TABLE Timetables (
    id SERIAL PRIMARY KEY,
    internshipPosition_id INT,
    period_id INT,
    supervisor_id INT,
    activity_name VARCHAR(200),
    FOREIGN KEY (internshipPosition_id) REFERENCES InternshipPositions(id) ON DELETE SET NULL,
    FOREIGN KEY (period_id) REFERENCES Periods(id) ON DELETE SET NULL,
    FOREIGN KEY (supervisor_id) REFERENCES Supervisors(id) ON DELETE SET NULL
);


CREATE TABLE CleaningGroups (
    id SERIAL PRIMARY KEY,
    group_id INT ,
    intern_id INT,
    FOREIGN KEY (intern_id) REFERENCES Interns(id) ON DELETE SET NULL
);

CREATE TABLE CleaningRosters (
    id SERIAL PRIMARY KEY,
    group_id INT ,
    schedule_date DATE NOT NULL,
    task_description TEXT NOT NULL
);

CREATE TABLE Equipments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    quantity INT,
    description TEXT,
    image_url TEXT
); 
CREATE TABLE EquipmentsBorrowed (
    id SERIAL PRIMARY KEY,
    equipment_id INT,
    borrowed_by INT,
    borrowed_date DATE,
    return_date DATE,
    status equipmentsBorrowed_status DEFAULT 'Borrowed',
    FOREIGN KEY (borrowed_by) REFERENCES Supervisors(id) ON DELETE SET NULL,
    FOREIGN KEY (equipment_id) REFERENCES Equipments(id) ON DELETE SET NULL
);


CREATE TABLE Documents (
    id SERIAL PRIMARY KEY,
    user_id INT,
    file_path VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Certificates (
    certificate_id SERIAL PRIMARY KEY,
    intern_id INT NOT NULL,
    internshipPosition_id INT NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    template_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (intern_id) REFERENCES interns(id) ON DELETE CASCADE,
    FOREIGN KEY (internshipPosition_id) REFERENCES InternshipPositions(id) ON DELETE CASCADE
);

/*
CREATE TABLE Messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES "User"(user_id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES "User"(user_id) ON DELETE CASCADE
);
CREATE TABLE VideoTutorial (
    task_id INT NOT NULL,
    tutorial_id SERIAL PRIMARY KEY,
    uploaded_by INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES Task(task_id) ON DELETE CASCADE,
    FOREIGN KEY (uploaded_by) REFERENCES "User"(user_id) ON DELETE CASCADE
);
*/

CREATE TABLE Quizes (
    id SERIAL PRIMARY KEY,
    task_id INT NOT NULL,
    uploaded_by INT,
    title VARCHAR(100) NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES Tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (uploaded_by) REFERENCES Supervisors(id) ON DELETE SET NULL
);

CREATE TABLE Questions (
    id SERIAL PRIMARY KEY,
    quiz_id INT NOT NULL,
    question VARCHAR(100) NOT NULL,
    answer VARCHAR(100) NOT NULL,
    type question_type NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES Quizes(id) ON DELETE CASCADE
);

CREATE TABLE Projects (
    id SERIAL PRIMARY KEY,
    internshipposition_id INT, 
    supervisor_id INT ,
    project_url VARCHAR(200),
    project_name_en VARCHAR(200), 
    project_name_fr VARCHAR(200), 
    description_en TEXT, 
    description_fr TEXT, 
    status project_status DEFAULT 'Pending',
    FOREIGN KEY (supervisor_id) REFERENCES Supervisors(id) ON DELETE SET NULL,
    FOREIGN KEY (internshipposition_id) REFERENCES internshippositions(id) ON DELETE SET NULL
);
    

CREATE TABLE AssignedProjects (
    id SERIAL PRIMARY KEY,
    intern_id INT,
    project_id INT,
    FOREIGN KEY (intern_id) REFERENCES Interns(id) ON DELETE SET NULL,
    FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE SET NULL
);

CREATE TABLE Reports (
    id SERIAL PRIMARY KEY,
    document_id INT,
    receiver_id INT,
    title VARCHAR(200),
    content TEXT,
    FOREIGN KEY (document_id) REFERENCES Documents(id) ON DELETE SET NULL,
    FOREIGN KEY (receiver_id) REFERENCES Supervisors(id) ON DELETE SET NULL
);

-- Intern Profiles table to capture submissions from the public profile form
-- Projects are intentionally excluded (they will be stored in a JSON file)
CREATE TABLE IF NOT EXISTS InternProfiles (
    id SERIAL PRIMARY KEY,
    -- Core profile
    intern_name TEXT NOT NULL,
    intern_position TEXT,
    intern_school TEXT,
    intern_bio TEXT,
    intern_email TEXT,
    -- Social links
    github_url TEXT,
    facebook_url TEXT,
    linkedin_url TEXT,
    twitter_url TEXT,
    instagram_url TEXT,
    -- File uploads (store paths/URLs, not blobs)
    profile_picture_url TEXT,
    cv_file_url TEXT,
    -- Internship section
    internship_description TEXT,
    internship_quote TEXT,
    -- Skills (lists from checkboxes)
    languages JSONB NOT NULL DEFAULT '[]'::jsonb,
    frameworks JSONB NOT NULL DEFAULT '[]'::jsonb,
    tools JSONB NOT NULL DEFAULT '[]'::jsonb,
    -- Experience (single set from form)
    job_title TEXT,
    company_name TEXT,
    job_duration TEXT,
    job_description TEXT,
     -- Education (single set from form)
    degree TEXT,
    education_details TEXT
);
