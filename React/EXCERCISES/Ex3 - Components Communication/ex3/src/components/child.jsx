import { useRef } from "react";

import styles from "./child.module.css";

const Child = ({ onSubmit }) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const adultRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      city: cityRef.current.value,
      isAdult: adultRef.current.checked
    };

    onSubmit(data);
  };

  return (
    <div className={styles.container}>
      <h2>Child Component</h2> <br />
      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <label htmlFor="name">Name:</label>
          <input ref={nameRef} type="text" id="name" />
        </div>

        <div className={styles.input}>
          <label htmlFor="age">Age:</label>
          <input ref={ageRef} type="number" id="age" min={1} max={100} />
        </div>

        <div className={styles.input}>
          <label htmlFor="city">City:</label>
          <select ref={cityRef}>
            <option>City</option>
            <option>Tel Aviv</option>
            <option>Haifa</option>
            <option>Holon</option>
            <option>Eilat</option>
          </select>
        </div>

        <div className={styles.checkbox}>
          <label htmlFor="IsAdult">IsAdult:</label>
          <input ref={adultRef} type="checkbox" id="IsAdult" />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Child;
