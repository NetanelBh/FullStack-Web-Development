import styles from "./CategoryListItem.module.css";

import { useState } from "react";

import Card from "../../UI/Card";
import Button from "../../UI/Button";

const CategoryListItem = ({ category }) => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);

  const updateCategoryHandler = () => {
    setIsUpdateClicked(true);
    

    setIsUpdateClicked(false);
  };

  const removeCategoryHandler = () => {};

  return (
    <Card className={styles.item_container}>
      <h2>{category}</h2>
      <div className={styles.actions_container}>
        <Button
          title="Update"
          type="button"
          className={`${styles.btn} ${styles.update_btn}`}
          onClick={updateCategoryHandler}
        />
        <Button
          title="Remove"
          type="button"
          className={`${styles.btn} ${styles.remove_btn}`}
          onClick={removeCategoryHandler}
        />
      </div>
    </Card>
  );
};

export default CategoryListItem;
