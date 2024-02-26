const students = [
  {
    id: 1,
    name: "Netanel",
    faculty: "Science",
    grades: [
      {
        profession: "algorithms",
        score: 100,
      },
      {
        profession: "Data structure",
        score: 95,
      },
      {
        profession: "Operation system",
        score: 91,
      }
    ],
  },
  {
    id: 2,
    name: "Galit",
    faculty: "Acountant",
    grades: [
      {
        profession: "accounts",
        score: 99,
      },
    ],
  },
  {
    id: 3,
    name: "Ariel",
    faculty: "School",
    grades: [
      {
        profession: "Math",
        score: 95,
      },
    ],
  },
  {
    id: 4,
    name: "Shira",
    faculty: "Garden",
    grades: [
      {
        profession: "Paint",
        score: 90,
      },
    ],
  },
];

export const getAllStudents = () => {
  return students;
};

export const getStudentById = (args) => {
  const {id} = args;
  return students.find((student) => student.id === id);
};

export const getstudentByFaculty = (args) => {
  const {faculty} = args;
  return students.find((student) => student.faculty === faculty);
};

export const getStudentGradesAverageById = (args) => {
  const {id} = args;
  const student = students.find((student) => student.id === id);

  const totalScore = student.grades.reduce((total, currentStudent) => {
    return total + currentStudent.score;
  }, 0);

  return totalScore / student.grades.length;
};

export const addStudent = (args) => {
  const {student} = args;
  students.push(student);

  return "Student add";
};

export const addNewGradeObjToStudent = (args) => {
  const { id, gradesObj } = args;
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students[index].grades.push(gradesObj);
  
    return `Added new grade per student id: ${id}`;
  }
  return "Wrong id";
};

export const updateStudentNameAndFaculty = (args) => {
  const { id, newDetails } = args;
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students[index].name = newDetails.name;
    students[index].faculty = newDetails.faculty;
  
    return "Name and Faculty successfuly updated";
  }
  return "Wrong id";
};

export const deleteStudent = (args) => {
  const {id} = args;
  const index = students.findIndex((student) => student.id === id);
  students.splice(index, 1);

  return "Student successfuly deleted";
};
