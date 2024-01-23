import styles from "./button.module.css";

const Button = ({ title, style, onClick }) => {
  return (
    <div className={styles.btn}>
      <button className={styles[style]} onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
