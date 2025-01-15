import styles from "./input.module.css";

import { forwardRef } from "react";

const Input = forwardRef(({ title, type }, ref) => {
    return (
        <div className={styles.container}>
            <label htmlFor={title}>{title}:</label>
            <input type={type} id={title} ref={ref} autoComplete="off"/>
        </div>
    );
});

export default Input;
