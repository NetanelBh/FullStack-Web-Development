import { getAllData as getGradesData } from "../repositories/gradesRepo.js";
import * as studentsRepo from "../repositories/studentsRepo.js";

export const getAllData = () => {
  return studentsRepo.getAllData();
};

export const getStudentById = (id) => {
  return studentsRepo.getStudentById(id);
};

export const getAllFaculties = async () => {
  const students = await getAllData();
  const faculties = students.map((student) => student.Faculty);
  return faculties;
};

export const getStudentsWithGrades = async () => {
  const students = await getAllData();
  const grades = await getGradesData();

  const allStudentsWithGrades = students.map((student) => {
    // Filter the grades according to the student's id
    const filterdGrades = grades.filter(
      (grade) => grade.StudentId === student.id
    );

    // Insert the student's grades to the retured object
    const studentGrades = filterdGrades.map((grade) => {
      return {profession: grade.Profession, grade: grade.Score};
    });

    return {...student._doc, grades: studentGrades};
  });

  return allStudentsWithGrades;
};
