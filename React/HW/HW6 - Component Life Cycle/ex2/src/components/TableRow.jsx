import styles from "./TableRow.module.css";

const TableRow = ({ data }) => {
  return (
    <>
      <li className={styles.text}><p>{data.name}</p></li>
      <li className={styles.text}><p>{data.email}</p></li>
      <li className={styles.text}>{data.products.map(product => <img src={product} alt="pic"/>)}</li>
    </>
  );
};

export default TableRow;
