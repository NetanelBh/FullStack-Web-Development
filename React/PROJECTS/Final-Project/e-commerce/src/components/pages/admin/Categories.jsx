import styles from "./Categories.module.css";

import Card from "../../UI/Card";

const Categories = () => {
  return (
    <div className={styles.main_container}>
      <h1>Categories</h1>
      <Card className={styles.list_container}>
        <Card className={styles.item_container}>
          <h2>Test</h2>
        </Card>
        <Card className={styles.item_container}>
          <h2>Test</h2>
        </Card>
        <Card className={styles.item_container}>
          <h2>Test</h2>
        </Card>
        <div>
          <input />
          <button>Add</button>
        </div>
      </Card>
    </div>
  );
};

export default Categories;
