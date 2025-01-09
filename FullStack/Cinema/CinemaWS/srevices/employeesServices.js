import * as employeesDbRepo from '../repositories/employeesDbRepo.js';
import * as fileRepo from '../repositories/fileRepo.js';

const JSONPATH = process.cwd() + '/data/employees.json';

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
    return employeesDbRepo.deleteEmployee(id);
};

export const getEmployeesFromFile = () => {
    return fileRepo.getDataFromJson(JSONPATH);
};

const writeEmployeesToFile = (employeesArray) => {
    fileRepo.writeToJson(JSONPATH, employeesArray);
};

export const addEmployeeToFile = async (newEmployee) => {
    let employees = {};
        if (fs.existsSync(JSONPATH)) {
            employees = await getEmployeesFromFile();
            employees.push(...newEmployee);
        }
        else {
            employees = [...newEmployee];
        }
    
    writeEmployeesToFile(employees);

    return newEmployee;
};

export const updateEmployeeInFile = async (id, updatedEmployee) => {
    const employees = await getEmployeesFromFile();
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees[index] = {...updatedEmployee};
    }

    writeEmployeesToFile(employees);

    return updatedEmployee;
};

export const deleteEmployeeFromFile = async (id) => {
    const employees = await getEmployeesFromFile();
    const index = employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
    }

    writeEmployeesToFile(employees);

    return id;
};