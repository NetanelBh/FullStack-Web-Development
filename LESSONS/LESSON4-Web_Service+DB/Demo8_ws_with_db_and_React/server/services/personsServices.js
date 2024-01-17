import * as personsRepo from "../repositories/personsRepo.js";
// HERE IN SERVICES, WE CAN DO MANIPULATION ON THE OBJECTS WE GET FROM THE REPO.

// Get All Persons from the repository
export const getAllPersons = () => {
  return personsRepo.getAllPersons();
};

// Get person by id
export const getPersonById = (id) => {
  return personsRepo.getPersonById(+id);
};

// Add person
export const addPerson = (person) => {
  return personsRepo.addPerson(person);
};

// PUT - Update person
export const updatePerson = (id, person) => {
  return personsRepo.updatePerson(+id, person);
};

// PATCH - Update person properties
export const updatePersonProperties = (id, newProperties) => {
  return personsRepo.updatePersonProperties(+id, newProperties);
};

// DELETE - Delete person
export const deletePerson = (id) => {
  return personsRepo.deletePerson(+id);
};