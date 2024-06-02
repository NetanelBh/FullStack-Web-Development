import employeesModel from '../models/employeesModel.js';

export const addEmployee = (employee) => {
    const newEmployee = employeesModel(employee);

    return newEmployee.save();
}