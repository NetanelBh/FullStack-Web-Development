import express from 'express';

import * as usersService from '../services/usersService.js';

// ENTRY POINT: http://localhost:3001/users

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await usersService.getUsers();
  res.send(users)
});

export default router;