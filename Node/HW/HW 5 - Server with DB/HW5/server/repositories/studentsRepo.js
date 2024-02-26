import Student from '../models/studentModel.js';

export const getAllData = () => {
  return Student.find();
};

export const getStudentById = (id) => {
  return Student.findById(id);
};

