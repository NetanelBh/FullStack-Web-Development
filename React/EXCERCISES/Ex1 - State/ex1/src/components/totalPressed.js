import { useState } from "react";

import styles from "./totalPressed.module.css";

const TotalPressed = () => {
  const [number, setNumber] = useState(0);
  const [totalNum, setTotalNum] = useState(0);

  const clickHandler = () => {
    setTotalNum(number + totalNum);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="number"
          id="number"
          onChange={(e) => setNumber(+e.target.value)}
        />
        <button className={styles.input} onClick={clickHandler}>
          +
        </button>{" "}
      </div>
      <p>{totalNum}</p>
    </>
  );
};

export default TotalPressed;
