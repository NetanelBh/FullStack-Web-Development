import employeesModel from "../models/employeesModel.js";
import bcrypt from "bcryptjs";

export const addEmployee = async (employee) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(employee.password, salt);
  employee.password = encryptedPassword;

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

export const deleteEmployeeFromDb = (id) => {
  return employeesModel.findByIdAndDelete(id);
};
