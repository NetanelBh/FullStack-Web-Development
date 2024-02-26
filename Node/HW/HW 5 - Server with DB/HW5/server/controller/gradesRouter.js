import express from 'express';

import * as gradesService from '../services/gradesService.js';

const router =  express.Router();

router.get('/', async (req, res) => {
  try {
    const gradesData = await gradesService.getAllData();
    res.send(gradesData);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:profession', async (req, res) => {
  const {profession} = req.params;
  try {
    const filteredGrades = await gradesService.getDataByProfession(profession);
    res.send(filteredGrades);
  } catch (error) {
    console.log(error);
  }
});

export default router;