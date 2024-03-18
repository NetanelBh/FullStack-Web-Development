import styles from "./taskListItem.module.css";

const TaskListItem = (props) => {
  return (
    <div className={styles.container}>
      <p>Title: {props.task.title}</p>
      <p>Completed: {props.task.completed.toString()}</p>
    </div>
  );
};

export default TaskListItem;
