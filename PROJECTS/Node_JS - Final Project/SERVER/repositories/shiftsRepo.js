import ShiftModel from '../models/shiftModel.js';

export const getShifts = () => {
  return ShiftModel.find();
};

export const addShift = (shift) => {};

export const updateShift = (id, shift) => {};

export const addEmployeeToShift = (shiftId, employeeId) => {};