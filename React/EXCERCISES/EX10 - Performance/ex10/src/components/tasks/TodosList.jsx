import { memo } from "react";
import styles from "./TodosList.module.css";

import TodosListItem from "./TodosListItem";

const Todos = ({ todos }) => {
  return (
    <ul className={styles.ul}>
      {todos.map((todo) => (
        <TodosListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default memo(Todos);
