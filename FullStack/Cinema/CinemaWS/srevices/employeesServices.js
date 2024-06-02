import * as employeesDbRepo from '../repositories/employeesDbRepo.js';

export const addEmployee = (employee) => { 
    return employeesDbRepo.addEmployee(employee);
};