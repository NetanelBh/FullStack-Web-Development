import { useRef } from "react";

import styles from "./ParentForm.module.css";

import Button from "../UI/Button";

const ParentForm = ({ onSubmit }) => {
  const idRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    onSubmit(idRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.main}>
        <div className={styles.text}>
          <label>User Id</label>
          <input type="number" min={1} max={10} ref={idRef} />
        </div>
        <Button type="submit" title="Show Tasks" className={styles.btn}/>
      </div>
    </form>
  );
};

export default ParentForm;
