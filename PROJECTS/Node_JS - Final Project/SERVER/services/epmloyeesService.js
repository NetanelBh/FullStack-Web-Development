import * as empRepo from '../repositories/employeesRepo.js';
import * as shiftsRepo from '../repositories/shiftsRepo.js';
import * as depRepo from '../repositories/departmentsRepo.js';

export const getEmployees = async () => {
  try {
    // For page /employees, we need names, departments and shifts
    const employees = await empRepo.getEmployees();
    const shifts = await shiftsRepo.getShifts();
    const departments = await depRepo.getDepartments();

    // Filter the recieved data from each section to get what we need to display

  } catch (error) {
    return error;
  }
};

export const addEmployee = () => {};

export const updatedEmployees = (id, updatedEmployee) => {};