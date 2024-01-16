// Create CRUD operations for cars

const cars = [
  { id: 1, model: "BWM", year: 2023, color: "Black" },
  { id: 2, model: "Ferrari", year: 2020, color: "Yellow" },
  { id: 3, model: "Porsche", year: 2021, color: "White" },
  { id: 4, model: "Mercedes", year: 2024, color: "Blue" },
];

// GET ALL
export const getAllCars = () => {
  return cars;
};

// GET BY ID
export const getCarById = (id) => {
  const car = cars.find(car => car.id === +id);

  return car;
};

// CREATE
export const addCar = (newCar) => {
  cars.push(newCar);

  return cars;
};

// PUT
export const updateCar = (id, UpdatedCar) => {
  const index = cars.findIndex(car => car.id === +id);
  cars[index] = UpdatedCar;

  return cars;
};

// PATCH
export const updateCarProperty = (id, newProperty) => {
  const index = cars.findIndex(car => car.id === +id);
  cars[index] = {...cars[index], ...newProperty};

  return cars;
};

// DELETE
export const deleteCar = (id) => {
  const index = cars.findIndex(car => car.id === +id);
  const deletedCar = cars.splice(index, 1);

  return deletedCar;
};