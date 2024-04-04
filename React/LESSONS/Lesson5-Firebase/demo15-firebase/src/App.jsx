import { useState } from 'react';
import db from './firebase';
import {
  query,
  collection,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState({});

  const getAll = () => {
    const q = query(collection(db, 'persons'));
    onSnapshot(q, (querySnapshot) => {
      // console.log(querySnapshot);
      setPersons(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  };

  const getById = () => {
    const q = query(doc(db, 'persons', 'cE1mAb0apJQmUI9AyIIA'));
    onSnapshot(q, (doc) => {
      setPerson({
        id: doc.id,
        ...doc.data(),
      });
    });
  };

  const addPerson = async () => {
    const obj = { name: 'John', age: 99 };
    await addDoc(collection(db, 'persons'), obj);
  };

  const updatePerson = async () => {
    const obj = { age: 21 };
    await updateDoc(doc(db, 'persons', 'n6PpEJd0mrzoDHEwbX5P'), obj);
  };

  const deletePerson = async () => {
    await deleteDoc(doc(db, 'persons', '5ebIHoPW2vLth6adizNM'));
  };

  return (
    <>
      {/* Get All */}
      <button onClick={getAll}>Get All Persons</button>
      <ul>
        {persons.map((per) => {
          return (
            <li key={per.id}>
              {per.name} {per.age}
            </li>
          );
        })}
      </ul>
      {/* Get By ID */}
      <button onClick={getById}>Get a Person</button>
      <br /> <br />
      Name: {person.name} <br />
      Age: {person.age} <br />
      <br />
      {/* Add */}
      <button onClick={addPerson}>Add</button>
      {/* Update */}
      <button onClick={updatePerson}>Update</button>
      {/* Delete */}
      <button onClick={deletePerson}>Delete</button>
    </>
  );
};

export default App;
