import styles from "./Button.module.css";

const Button = ({ onClick, title }) => {
  return (
    <button className={styles.style} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
