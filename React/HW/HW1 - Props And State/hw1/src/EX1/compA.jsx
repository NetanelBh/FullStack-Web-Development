import styles from './compA.module.css';

import { useState } from "react";

import CompB from './compB';

const CompA = () => {
  const [text, setText] = useState("");

  const textChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.a}>
      <h1>CompA</h1>
      <input type="text" onChange={textChange} />
      <CompB text={text}/>
      <br /><br />
    </div>
  );
};

export default CompA;
