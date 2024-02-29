import styles from './compB.module.css';

import CompC from './compC';

const CompB = ({text}) => {
  return <div className={styles.b}>
    <h1>Comp B</h1> <br />
    <CompC text={text}/>
    <br />
  </div>
};

export default CompB;