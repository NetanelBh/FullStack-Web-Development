import styles from "./Todos.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import TodosListItem from "./TodosListItem";

const Todos = ({ todos, userId }) => {
  return (
    <>
      <div className={styles.header}>
        <h3>Todos - User {userId}</h3>
        <Button type="button" title="Add" className={styles.btn} />
      </div>
      {todos.length > 0 && (
        <Card className={styles.main_container}>
          <ul className={styles.todo_list}>
            {todos.map((todo) => (
              <TodosListItem todo={todo} key={todo.id} />
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Todos;
