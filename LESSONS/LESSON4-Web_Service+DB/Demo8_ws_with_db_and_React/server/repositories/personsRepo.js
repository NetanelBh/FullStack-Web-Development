import Person from '../models/personModel.js';

// Get All Persons
export const getAllPersons = () => {
  return Person.find();
};

// Get person by id
export const getPersonById = (id) => {
  return Person.findOne({id});
};

// Add person
export const addPerson = (person) => {
  const newPerson = new Person(person);
  return newPerson.save();
};

// PUT - Update person
export const updatePerson = (id, person) => {
  return Person.replaceOne({id}, person);
};

// PATCH - Update person properties
export const updatePersonProperties = (id, newProperties) => {
  return Person.updateOne({id}, newProperties);
};

// DELETE - Delete person
export const deletePerson = (id) => {
  return Person.deleteOne({id});
};
