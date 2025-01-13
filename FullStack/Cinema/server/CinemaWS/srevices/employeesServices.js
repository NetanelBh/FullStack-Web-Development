import fs from "fs";

import * as employeesDbRepo from "../repositories/employeesDbRepo.js";
import * as fileRepo from "../repositories/fileRepo.js";

const JSONPATH = process.cwd() + "/data/employees.json";

export const addEmployeeToDb = (employee) => {
    return employeesDbRepo.addEmployee(employee);
};

export const getEmployeesFromDb = () => {
    return employeesDbRepo.getEmployeesFromDb();
};

export const getEmployeeFromDbById = (id) => {
    return employeesDbRepo.getEmployeeFromDbById(id);
};

export const getEmployeeFromDbByUsername = (username) => {
    return employeesDbRepo.getEmployeeFromDbByUsername(username);
};

export const deleteEmployeeFromDb = (id) => {
    return employeesDbRepo.deleteEmployeeFromDb(id);
};

export const getEmployeesFromFile = () => {
    return fileRepo.getDataFromJson(JSONPATH);
};

export const addEmployeeToFile = async (newEmployee) => {
    let employees = {};
    if (fs.existsSync(JSONPATH)) {
        employees = await getEmployeesFromFile();
        employees.employees.push({ ...newEmployee });
    } else {
        employees = { employees: [{ ...newEmployee }] };
    }

    fileRepo.writeDataToJson(JSONPATH, employees);

    return newEmployee;
};

export const updateEmployeeInFile = async (id, updatedEmployee) => {
    const employees = await getEmployeesFromFile();
    const index = employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
        employees[index] = { ...updatedEmployee };
    }

    fileRepo.writeDataToJson(JSONPATH, employees);

    return updatedEmployee;
};

export const deleteEmployeeFromFile = async (id) => {
    // When delete employee from the system, will delete the employee from the employees.json file as well
    const employees = await getEmployeesFromFile();
    const index = employees.employees.findIndex(
        (employee) => employee.id === id
    );
    if (index !== -1) {
        employees.employees.splice(index, 1);
    }

    fileRepo.writeDataToJson(JSONPATH, employees);

    return id;
};
