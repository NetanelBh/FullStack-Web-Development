import ShiftModel from '../models/shiftModel.js';

export const getShifts = () => {
  return ShiftModel.find();
};