import * as employeesDbRepo from '../repositories/employeesDbRepo.js';
import { getEmployeeByUsername } from './employeesServices.js';

export const register = (employee) => { 
    return employeesDbRepo.addEmployee(employee);
};

export const login = (username) => { 
    return getEmployeeByUsername(username);
};