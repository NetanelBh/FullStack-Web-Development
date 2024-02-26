const arr = [
  { name: "Avi", age: 20 },
  { name: "Ron", age: 30 },
  { name: "Dana", age: 25 },
];

const agesArr = arr.filter(person => person.age >= 22 && person.age <=32);
agesArr.forEach(person => console.log(person.name));

const nameLengthArr = agesArr.map(person => person.name.length);
console.log(nameLengthArr);
