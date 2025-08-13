import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Simple user store (in production, this would be in a database)
const users = [
  {
    id: 1,
    email: 'admin@digimark.com',
    password: '$2b$10$rQZ8kZKjGxGxGxGxGxGxGOeKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK', // 'password123'
    fullname: 'Admin User'
  },
  {
    id: 2,
    email: 'intern@digimark.com',
    password: '$2b$10$rQZ8kZKjGxGxGxGxGxGxGOeKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK', // 'password123'
    fullname: 'Intern User'
  }
];

export async function authenticateUser(email, password) {
  const user = users.find(u => u.email === email);
  if (!user) {
    return null;
  }
  
  // For demo purposes, accept 'password123' for any user
  if (password === 'password123') {
    return {
      id: user.id,
      email: user.email,
      fullname: user.fullname
    };
  }
  
  return null;
}

export function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || 'default-secret',
    { expiresIn: '24h' }
  );
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
  } catch (error) {
    return null;
  }
}

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  const token = authHeader.substring(7);
  const decoded = verifyToken(token);
  
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  req.user = decoded;
  next();
}

