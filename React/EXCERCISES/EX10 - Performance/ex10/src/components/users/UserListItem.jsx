import styles from "./UserListItem.module.css";

import { memo, useMemo } from "react";

import TodosList from "../tasks/TodosList";
import Card from "../UI/Card";

const UserListItem = ({ user, todos }) => {
  const filteredTodos = useMemo(() => {
    const filteredData = todos.filter(todo => user.id === todo.userId);
    const filteredArray = [];
    for(let i = 0; i < 3; i++) {
      filteredArray.push(filteredData[i]);
    }

    return filteredArray;
  });

  return (
    <div className={styles.main}>
      <li className={styles.li}>
        <Card className={styles.details}>
          <p>
            ID: <span>{user.id}</span>
          </p>
          <p>
            Name: <span>{user.name}</span>
          </p>
          <p>
            Email: <span>{user.email}</span>
          </p>
          <Card className={styles.tasks}>
            <TodosList todos={filteredTodos} />
          </Card>
        </Card>
      </li>
    </div>
  );
};

export default memo(UserListItem);
