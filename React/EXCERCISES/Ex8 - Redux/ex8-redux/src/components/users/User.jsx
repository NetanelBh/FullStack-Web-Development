import { useRef } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../store/users";

import styles from "./User.module.css";

import Button from "../UI/Button";

const User = () => {
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();

  const dispath = useDispatch();

  const editHandler = () => {
    const user = {
      id: idRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
    };

    dispath(usersActions.edit(user));
  };

  const deleteHandler = () => {
    dispath(usersActions.delete(idRef.current.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      id: idRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
    };

    dispath(usersActions.add(user));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.user_data}>
        <div className={styles.data_container}>
          <label htmlFor="id">ID:</label>
          <input type="number" id="id" ref={idRef} />
        </div>
        <div className={styles.data_container}>
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" ref={firstNameRef} />
        </div>
        <div className={styles.data_container}>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" ref={lastNameRef} />
        </div>
        <div className={styles.data_container}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" ref={ageRef} />
        </div>
      </div>

      <div className={styles.actions}>
        <Button type="submit" title="Add" className={styles.btn} />
        <Button
          type="button"
          title="Edit"
          className={styles.btn}
          onClick={editHandler}
        />
        <Button
          type="button"
          title="Delete"
          className={styles.btn}
          onClick={deleteHandler}
        />
      </div>
    </form>
  );
};

export default User;
