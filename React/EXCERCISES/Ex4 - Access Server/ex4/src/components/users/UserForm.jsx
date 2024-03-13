import styles from "./UserForm.module.css";

import Button from "../UI/Button";
import { useRef } from "react";

const UserDetails = ({onSubmit}) => {
  const idRef = useRef();

  const showDetailsHandler = (event) => {
    event.preventDefault();

    onSubmit(idRef.current.value);
  };

  return (
    <form onSubmit={showDetailsHandler}>
      <div className={styles.container}>
        <input ref={idRef} className={styles.input} type="number" min={1} max={10} placeholder="User ID" />
        <Button type="submit" title="Show" className={styles.btn} />
      </div>
    </form>
  );
};

export default UserDetails;
