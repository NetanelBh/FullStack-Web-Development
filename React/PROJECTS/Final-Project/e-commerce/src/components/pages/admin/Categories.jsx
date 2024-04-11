import styles from "./Categories.module.css";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import CategoryListItem from "./CategoryListItem";
import { categoriesActions } from "../../store/categoriesSlice";

const Categories = () => {
  const dispatcher = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const inputRef = useRef();

  const addCategoryHandler = () => {};

  return (
    <div className={styles.main_container}>
      <h1>Categories</h1>
      <Card className={styles.list_container}>
        <div className={styles.content_container}>
          {categories.map((c) => (
            <CategoryListItem key={c} category={c} />
          ))}
        </div>

        <div className={styles.actions_wrapper}>
          <div className={styles.item_actions}>
            <input id="category" placeholder="Add new category" />

            <Button
              title="Add"
              type="button"
              className={styles.btn}
              onClick={addCategoryHandler}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Categories;
