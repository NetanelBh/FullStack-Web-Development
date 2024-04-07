import styles from "./Users.module.css";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import Card from "../UI/Card";
import UserListItem from "./UserListItem";
import PacmanLoading from "../UI/PacmanLoading";

const USERS_URL = "http://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const usersResp = await axios.get(USERS_URL);
      const filteredData = usersResp.data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      });
      setUsers(filteredData);

      const todosRest = await axios.get(TODOS_URL);
      setTodos(todosRest.data);
    } catch (error) {
      throw new Error(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {isLoading && <PacmanLoading color="white" />}
      {!isLoading && (
        <div className={styles.main_container}>
          <Card className={styles.ul_container}>
            <ul className={styles.ul}>
              {users.map((user) => (
                <UserListItem key={user.id} user={user} todos={todos} />
              ))}
            </ul>
          </Card>
        </div>
      )}
    </>
  );
};

export default Users;
