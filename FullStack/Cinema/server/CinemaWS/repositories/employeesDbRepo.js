import employeesModel from "../models/employeesModel.js";

export const addEmployee = (employee) => {
    const newEmployee = employeesModel(employee);
    return newEmployee.save();
};

export const getEmployeesFromDb = () => {
    return employeesModel.find();
};

export const getEmployeeFromDbById = (id) => {
    return employeesModel.findById(id);
};

export const getEmployeeFromDbByUsername = (username) => {
    return employeesModel.findOne({ username });
};

export const updateEmployeePassword = (employee) => {
    const condition = { username: employee.username };
    const data = { password: employee.password };
    // Option to return the updated document rather than the original one.
    const options = { new: true };
    
    return employeesModel.findOneAndUpdate(condition, data, options);
};

export const deleteEmployeeFromDb = (id) => {
    return employeesModel.findByIdAndDelete(id);
};
