import express from 'express';

import * as authService from '../service/authService.js';

const router = express.Router();

// Entry point: http://localhost:3001/auth

router.post('/signup', async (req, res) => {
  const resp = await authService.signup(req.body.email, req.body.password);

  // The content could be either: the token or an error
  res.json({success: resp.success, content: resp.content});
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  const resp = await authService.login(email, password);

  res.json({success: resp.success, content: resp.content});
});

export default router;