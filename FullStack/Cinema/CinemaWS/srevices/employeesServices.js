import * as employeesDbRepo from '../repositories/employeesDbRepo.js';

export const addEmployee = (employee) => { 
    return employeesDbRepo.addEmployee(employee);
};

export const getAllEmployees = () => { };

export const getEmployeeById = (id) => { };

export const getEmployeeByUsername = (username) => { 
    return employeesDbRepo.getEmployeeByUsername(username);
};