import express from 'express';

import * as depsService from '../services/departmentsService.js';

// ENTRY POINT: http://localhost:3001/departments

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const deps = await depsService.getDepartments();
    res.send(deps);
  } catch (error) {
    res.send(error);
  }
});

export default router;