const persons = [
  { id: 1, name: "Netanel", age: 36 },
  { id: 2, name: "Galit", age: 34 },
  { id: 3, name: "Shira", age: 3 },
  { id: 4, name: "Ariel", age: 7 },
];

// CRUD - Create, Read, Update, Delete

// Get - Get all
const getAllPersons = () => {
  return persons;
};

// Get = Get By ID - Read
const getPersonById = (id) => {
  const person = persons.find((per) => per.id === id);

  return person ? person : "Wrong ID entered";
};

// POST - Create
const addPerson = (person) => {
  persons.push(person);

  return " Successfully Created";
};

// PUT - Update
const updatePerson = (id, person) => {
  const index = persons.findIndex((per) => per.id === id);
  if (index !== -1) {
    // Option1 - PUT
    persons[index] = person;
    // Option2 - PATCH
    persons[index] = { ...persons[index], ...person };

    return "Updated successfully";
  } else {
    return "Wrong ID entered";
  }
};

// DELETE - Delete
const deletePerson = (id) => {
  const index = persons.findIndex((per) => per.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    return "Deleted successfully";
  } else {
    return "Wrong ID entered";
  }
};

module.exports = {
  getAllPersons,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
};
