import DepModel from '../models/departmentModel.js';

export const getDepartments = () => {
  return DepModel.find();
};