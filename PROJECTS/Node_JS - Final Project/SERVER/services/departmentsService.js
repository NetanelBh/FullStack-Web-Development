import * as depRepo from '../repositories/departmentsRepo.js';

export const getDepartments = () => {
  return depRepo.getDepartments();
};