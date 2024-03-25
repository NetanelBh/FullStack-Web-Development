import styles from "./TodosListItem.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const TodosListItem = ({ todo }) => {
  return (
    <Card className={styles.li_container}>
      <li>
        <p className={styles.title}>
          <span className={styles.prefix}>Title:</span> {todo.title}
        </p>
        <div className={styles.action}>
          <p>
            <span className={styles.prefix}>Completed:</span> {todo.completed.toString()}
          </p>
          {!todo.completed && (
            <Button
              type="button"
              title="Mark Completed"
              className={styles.btn}
            />
          )}
        </div>
      </li>
    </Card>
  );
};

export default TodosListItem;
