import express from 'express';

import {
  getAllPersons,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
} from "../services/personsServices.js";

const router = express.Router();
// If we reached to here, it means we got request of ...../persons

// Get all persons
router.get('/', (req, res) => {
  const persons = getAllPersons();
  res.send(persons);
});

// Get Person by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const persons = getPersonById(id);

  res.send(persons);
});

// Add new person
router.post('/', (req, res) => {
  const newPerson = req.body;
  const addedPerson = addPerson(newPerson);

  res.send(addedPerson);
});

// Update person with PUT
router.patch('/:id', (req, res) => {
  const properties = req.body;
  const id = req.params.id;

  const updatedPerson = updatePerson(id, properties);

  res.send(updatedPerson);
});

// Delete person
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deletedPerson = deletePerson(id);

  res.send(deletedPerson);
});

export default router;