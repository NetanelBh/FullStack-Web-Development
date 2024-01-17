// If we are here, it means that entered url with ../persons
import * as personsService from "../services/personsServices.js";

import express from 'express';

const router = express.Router()

// Get all persons from DB
router.get('/', async (req, res) => {
  try {
    const persons = await personsService.getAllPersons();
    res.send(persons);
  } catch (error) {
    res.send(error);
  }
});

// Get person by id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const person = await personsService.getPersonById(id);
    res.send(person);
  } catch (error) {
    res.send(error); 
  }
});

// Create a new person in DB
router.post('/', async (req, res) => {
  const newPerson = req.body;
  try {
    const resp = await personsService.addPerson(newPerson);
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
});

// Replace person in DB
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const newPerson = req.body;
  try {
    const resp = await personsService.updatePerson(id, newPerson);
    // ModifiedCount tell the number of modifications in the DB.
    if (resp.modifiedCount > 0) {
      res.send("Successfully person replaced");
    } else {
      res.send("Failed person replaced");
    }
  } catch (error) {
    res.send(error);
  }
});

// Update person's properties in DB
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const properties = req.body;
  try {
    const resp = await personsService.updatePersonProperties(id, properties);
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
});

// Delete person from DB
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const resp = await personsService.deletePerson(id);
    if (resp.deletedCount > 0) {
      res.send("Person seccessfully deleted");
    } else {
      res.send("Person not found");
    }
  } catch (error) {
    res.send(error);
  }
});

export default router;