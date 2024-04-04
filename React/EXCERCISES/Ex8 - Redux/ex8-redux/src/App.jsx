import styles from "./App.module.css";

import User from "./components/users/User";
import AllUsers from "./components/users/AllUsers";
import AdultUsers from "./components/users/AdultUsers";

const App = () => {
  return (
    <div className={styles.container}>
      <User />
      <AllUsers />
      <AdultUsers />
    </div>
  );
};

export default App;
