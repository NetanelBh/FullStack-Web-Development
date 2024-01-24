import * as gradesRepo from '../repositories/gradesRepo.js';

export const getAllData = () => {
  return gradesRepo.getAllData();
};

export const getDataByProfession = async (profession) => {
  const filteredGrades = await gradesRepo.getDataByProfession(profession);
  return filteredGrades;
};