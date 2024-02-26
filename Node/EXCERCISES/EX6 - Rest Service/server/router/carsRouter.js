import express from "express";
// If we are here, it means that we got request to localhost:3000/cars

import * as carsServices from "../services/carsServices.js";

const router = express.Router();

// This path is the root of localhost:3000/cars
router.get('/', (req, res) => {
  const cars = carsServices.getAllCars();
  res.send(cars);
});

router.get('/:id', (req, res) => {
  const carId = req.params.id;
  const carById = carsServices.getCarById(carId);

  res.send(carById);
});

router.post('/', (req, res) => {
  const newCar = req.body;
  const addedCar = carsServices.addCar(newCar);

  res.send(addedCar);
});

router.put('/:id', (req, res) => {
  const car = req.body;
  const id = req.params.id;

  const updatedCar = carsServices.updateCar(id, car);
  res.send(updatedCar);
});

router.patch('/:id', (req, res) => {
  const carId = req.params.id;
  const newProperty = req.body;

  const updatedCar = carsServices.updateCarProperty(carId, newProperty);

  res.send(updatedCar);
});

router.delete('/:id', (req, res) => {
  const carId = req.params.id;

  const deletedCar = carsServices.deleteCar(carId);

  res.send(deletedCar);
});

export default router;