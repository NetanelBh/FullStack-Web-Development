import Grade from '../models/gradesModel.js';

export const getAllData = () => {
  return Grade.find();
};

export const getDataByProfession = (profession) => {
  return Grade.find({Profession: profession});
};