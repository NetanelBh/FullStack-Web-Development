import express from 'express';
import jwt from 'jsonwebtoken';

import * as authService from '../Services/authService.js';

// Entry point http://localhost:3001/auth

const router = express.Router();

// http://localhost:3001/auth/login
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  
  const result = await authService.login(username, password);
  if (!result.success) {
    return res.status(401).json({message: result.message});
  }
  
  // If the authentication succeeded, will create a token and return to client
  const token = jwt.sign({username}, process.env.KEY);
  return res.json({token});
});

export default router;