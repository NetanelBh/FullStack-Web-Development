// In this file we are in route: ".../users"

import express from 'express';

import * as userService from '../services/usersService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await userService.getAllUsersData();
  res.send(users);
});

export default router;