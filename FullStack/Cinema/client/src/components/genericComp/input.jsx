import styles from "./input.module.css";

const Input = ({ label, type }) => {
    return (
        <div className={styles.container}>
            <label>{label}:</label>
            <input type={type} />
        </div>
    );
};

export default Input;
