const persons = [
  { id: 1, name: "Netanel", age: 36 },
  { id: 2, name: "Galit", age: 34 },
  { id: 3, name: "Shira", age: 3 },
  { id: 4, name: "Ariel", age: 7 },
];

// CRUD - Create, Read, Update, Delete

// Get - Get all
export const getAllPersons = () => {
  return persons;
};

// Get = Get By ID - Read
export const getPersonById = (id) => {
  const person = persons.find((per) => per.id === +id);

  return person ? person : "Wrong ID entered";
};

// POST - Create
export const addPerson = (person) => {
  persons.push(person);
  return person;
};

// PUT - Update
export const updatePerson = (id, person) => {
  const index = persons.findIndex((per) => per.id === +id);
  if (index !== -1) {
    // Option1 - PUT
    // persons[index] = person;

    // Option2 - PATCH
    persons[index] = { ...persons[index], ...person };

    return persons[index];
  } else {
    return "Wrong ID entered";
  }
};

// DELETE - Delete
export const deletePerson = (id) => {
  const index = persons.findIndex((per) => per.id === +id);
  if (index !== -1) {
    const removedPerson = persons.splice(index, 1);
    return removedPerson[0];
  } else {
    return "Wrong ID entered";
  }
};