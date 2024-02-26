import styles from "./addPerson.module.css";

import { useRef } from "react";

const AddPerson = ({ onSubmit }) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const person = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      city: cityRef.current.value,
    };

    onSubmit(person);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.input}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={styles.input}>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" ref={ageRef} />
      </div>
      <div className={styles.input}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>

      <div className={styles.action}>
        <button type="submit" className={styles.btn}>Add Person</button>
      </div>
    </form>
  );
};

export default AddPerson;
