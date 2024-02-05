import express from "express";
import cors from "cors";

import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

import * as studSrv from "./services/studentServices.js";

const schema = buildSchema(`
  type Grades {
    profession: String
    score: Int
  }

  type Student {
    id: Int
    name: String
    faculty: String
    grades: [Grades]
  }

  input NameAndFacultyInput {
    name: String
    faculty: String
  }

  input GradesInput {
    profession: String
    score: Int
  }

  input StudentInput {
    id: Int
    name: String
    faculty: String
    grades: [GradesInput]
  }

  type Query {
    allStudents: [Student]
    studentById(id: Int): Student
    studentByFaculty(faculty: String): Student
    studentGradesAverage(id: Int): Float
  }

  type Mutation {
    addStudent(student: StudentInput): String
    addStudentGrades(id: Int, gradesObj: GradesInput): String
    updateNameAndFaculty(id: Int, newDetails: NameAndFacultyInput): String
    deleteStudent(id: Int): String
  }
`);

// Define per each post query/Mutaion, the fuction in service
// The definition defined above in the root object
const root = {
  allStudents: studSrv.getAllStudents,
  studentById: studSrv.getStudentById,
  studentByFaculty: studSrv.getstudentByFaculty,
  studentGradesAverage: studSrv.getStudentGradesAverageById,
  addStudent: studSrv.addStudent,
  addStudentGrades: studSrv.addNewGradeObjToStudent,
  updateNameAndFaculty: studSrv.updateStudentNameAndFaculty,
  deleteStudent: studSrv.deleteStudent,
};

const app = express();
const port = 3001;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
