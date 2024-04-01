import styles from "./HelloPage.module.css";

import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";

const HelloPage = () => {
  const navigate = useNavigate();

  const startHandler = () => {
    navigate('/input');
  };

  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <Button
        type="button"
        title="Start"
        onClick={startHandler}
        className={styles.btn}
      />
    </div>
  );
};

export default HelloPage;
