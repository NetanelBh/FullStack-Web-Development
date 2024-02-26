import express from 'express';

import * as studentsService from '../services/studentsService.js';

const router =  express.Router();

router.get('/', async (req, res) => {
  try {
    const students = await studentsService.getAllData();
    res.send(students);
  } catch (error) {
    console.log(error);
  }
});

router.get('/faculty', async (req, res) => {
  try {
    const faculties = await studentsService.getAllFaculties();
    res.send(faculties);
  } catch (error) {
    console.log(error);
  }

});

router.get('/withgrades', async (req, res) => {
  const studentsWithGrades = await studentsService.getStudentsWithGrades();
  res.send(studentsWithGrades);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const student = await studentsService.getStudentById(id);
    res.send(student);
  } catch (error) {
    console.log(error);
  }
});

export default router;