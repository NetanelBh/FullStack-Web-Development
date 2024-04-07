import styles from './App.module.css';

import Users from "./components/users/Users";

const App = () => {
  return (
    <div className={styles.main}>
      <Users />
    </div>
  );
};

export default App;
