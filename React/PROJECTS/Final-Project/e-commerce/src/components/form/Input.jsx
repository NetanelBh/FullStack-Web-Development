import styles from "./Input.module.css";

import { forwardRef } from "react";

const Input = forwardRef(({ title, type, className }, ref) => {
  const classes = `${styles.main_input} ${className}`;

  return (
    <div className={classes}>
      <label htmlFor={title}>{title} </label>
      <input type={type} id={title} ref={ref} />
    </div>
  );
});

export default Input;
