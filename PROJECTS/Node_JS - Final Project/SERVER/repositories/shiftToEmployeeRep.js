import WorkSchedule from '../models/shiftsToEmployee.js';

export const getWorkSchedule = () => {
  return WorkSchedule.find();
};