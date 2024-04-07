import styles from "./TodosListItem.module.css";

const TodosListItem = ({ todo }) => {
  // console.log(todo);
  return <li className={styles.li}>
    <p><span>Title:</span> {todo.title}</p>
    <p><span>Completed:</span> {todo.completed.toString()}</p>
  </li>;
};

export default TodosListItem;
