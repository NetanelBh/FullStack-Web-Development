import express from 'express';

import * as shiftsService from '../services/shiftsService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const shifts = await shiftsService.getShifts();
  res.send(shifts);
});

export default router;