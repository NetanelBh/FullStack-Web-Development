import styles from './compC.module.css';

const CompC = ({text}) => {
  return <div className={styles.c}>
    <h1>Comp C</h1>
    <h2>{text}</h2>
    <br />
  </div>
};

export default CompC;