/* Static Data */
const persons = [
  { id: 1, name: 'Avi', age: 20 },
  { id: 2, name: 'Dana', age: 30 },
  { id: 3, name: 'Ron', age: 40 },
];

export const getAllPersons = () => {
  return persons;
};

export const getPersonById = (args) => {
  const { id } = args;
  return persons.find((p) => p.id === id);
};

export const getPersonByAge = (args) => {
  const { age } = args;
  return persons.filter((p) => p.age > age);
};

export const addPerson = (args) => {
  const { per } = args;
  persons.push(per);
  return 'Created!';
};

export const updatePerson = (args) => {
  const { per } = args;
  const index = persons.findIndex((p) => p.id === per.id);
  if (index !== -1) {
    // persons[index] = per; // PUT
    persons[index] = { ...persons[index], ...per }; // PATCH
    return 'Updated!';
  }
  return 'Wrong ID';
};

export const deletePerson = (args) => {
  const { id } = args;
  const index = persons.findIndex((p) => p.id === id);
  if (index !== -1) {
    persons.splice(index, 1);
    return 'Deleted!';
  }
  return 'Wrong ID';
};