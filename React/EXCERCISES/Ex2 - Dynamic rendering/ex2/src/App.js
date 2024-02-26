import { useState } from "react";

import styles from "./App.module.css";

import AddPerson from "./addPerson";
import ListData from "./components/list";
import TableData from "./components/table";

const INITIAL_STATE = [
  { name: "Netanel", age: 36, city: "Holon" },
  { name: "Galit", age: 34, city: "Bat-yam" },
  { name: "Nofar", age: 29, city: "Ramla" },
];

const App = () => {
  const [persons, setPersons] = useState(INITIAL_STATE);

  const submitHandler = (person) => {
    setPersons([...persons, person]);
  };

  return (
    <div className={styles.app}>
      <TableData persons={persons}></TableData>
      <ListData persons={persons}></ListData> <br />
      <AddPerson onSubmit={submitHandler}/>
    </div>
  );
};

export default App;
