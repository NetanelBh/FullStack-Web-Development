import styles from "./depDropDown.module.css";

const DepDropDown = ({ title, onChange }) => {
  return (
    <>
      <select className={styles.dropdown}>
        <option value="Choose">{title}</option>
      </select>
    </>
  );
};

export default DepDropDown;
