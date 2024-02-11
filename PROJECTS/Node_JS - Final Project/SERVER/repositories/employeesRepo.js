import EmployeeModel from '../models/employeeModel.js';

export const getEmployees = () => {
  return EmployeeModel.find();
};

export const addEmployee = async (employee) => {
  const newEmployee = EmployeeModel(employee);

  return newEmployee.save();
};

export const updateEmployee = (id, updatedEmployee) => {
  return EmployeeModel.findByIdAndUpdate(id, updatedEmployee);
};

export const deleteEmployee = async (id) => {
  return EmployeeModel.findByIdAndDelete(id);
};