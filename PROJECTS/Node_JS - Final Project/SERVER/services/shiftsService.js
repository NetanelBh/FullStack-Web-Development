import * as shiftsRepo from '../repositories/shiftsRepo.js';
import * as workScheduleRepo from '../repositories/shiftToEmployeeRep.js';

export const getShifts = () => {
  return shiftsRepo.getShifts();
};

export const getWorkSchedule = () => {
  return workScheduleRepo.getWorkSchedule();
};