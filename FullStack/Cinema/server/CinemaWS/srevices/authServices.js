import * as employeesDbRepo from '../repositories/employeesDbRepo.js';
import { getEmployeeFromDbByUsername } from './employeesServices.js';

export const register = (employee) => { 
    return employeesDbRepo.addEmployee(employee);
};

export const login = (username) => { 
    return getEmployeeFromDbByUsername(username);
};