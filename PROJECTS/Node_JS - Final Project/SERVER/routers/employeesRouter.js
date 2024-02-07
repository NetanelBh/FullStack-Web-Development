import express from 'express';

import * as empsService from '../services/epmloyeesService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const employees = await empsService.getEmployees();
    res.send(employees);
  } catch (error) {
    res.send(error);
  }
});

export default router;