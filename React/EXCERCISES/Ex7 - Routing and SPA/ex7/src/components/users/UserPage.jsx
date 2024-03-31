import styles from './UserPage.module.css';

import { useLocation } from 'react-router-dom';

import Card from '../UI/Card';

const UserPage = () => {
  const location = useLocation();
  const userData = location.state;
  
  return <Card className={styles.container}>
    <div className={styles.details_container}>
      <p className={`${styles.font_size} ${styles.name_label}`}>Name:</p>
      <p className={`${styles.font_size} ${styles.color}`}>{userData.name}</p>
    </div>
    <div className={styles.details_container}>
      <p className={`${styles.font_size} ${styles.name_label}`}>Email:</p>
      <p className={`${styles.font_size} ${styles.color}`}>{userData.email}</p>
    </div>
    <div className={styles.details_container}>
      <p className={`${styles.font_size} ${styles.name_label}`}>City:</p>
      <p className={`${styles.font_size} ${styles.color}`}>{userData.city}</p>
    </div>
  </Card>
};

export default UserPage;