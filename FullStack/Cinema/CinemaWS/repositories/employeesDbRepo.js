import employeesModel from '../models/employeesModel.js';

export const addEmployee = (employee) => {
    const newEmployee = employeesModel(employee);

    return newEmployee.save();
}

export const getEmployeesFromDb = () => {
    return employeesModel.find();
};

export const getEmployeeFromDbById = (id) => { 
    return employeesModel.findById(id);
};

export const getEmployeeFromDbByUsername = (username) => { 
    return employeesModel.findOne({username});
};

export const deleteEmployeeFromDb = (id) => {
    return employeesModel.findByIdAndDelete(id);
}