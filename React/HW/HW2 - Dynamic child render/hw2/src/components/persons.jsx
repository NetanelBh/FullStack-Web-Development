import styles from "./persons.module.css";

import PersonInfo from "./personInfo";

const personsList = [
  {
    name: "Avi",
    tasks: [
      { title: "Task A", completed: true },
      { title: "Task B", completed: false },
    ],
  },
  {
    name: "Dana",
    tasks: [
      { title: "Task C", completed: true },
      { title: "Task D", completed: false },
    ],
  },
];

const Persons = () => {
  return <div className={styles.container}>
    <h1>Persons List:</h1>
    {personsList.map((person, index) => {
      return <PersonInfo key={index} person={person} />
    })}
  </div>
};

export default Persons;
