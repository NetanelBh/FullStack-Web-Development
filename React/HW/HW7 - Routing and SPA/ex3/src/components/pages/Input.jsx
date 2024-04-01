import styles from "./Input.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (firstNameRef.current.value.trim().length === 0) {
      alert("First Name Is Mandatory");
      return;
    }

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };

    navigate("/city", { state: data });

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
  };

  return (
    <Card className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.input}>
          <label>First Name:</label>
          <input ref={firstNameRef} />
        </div>

        <div className={styles.input}>
          <label>Last Name:</label>
          <input ref={lastNameRef} />
        </div>

        <Button type="form" title="Next" className={styles.btn} />
      </form>
    </Card>
  );
};

export default Input;
