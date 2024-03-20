import styles from "./Users.module.css";

import { useState, useEffect, useCallback } from "react";

import Search from "./Search";
import UsersList from "./UsersList";
import HttpReq from "../utils/httpReq";
import PacmanLoading from "../UI/PacmanLoading";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const usertList = await HttpReq(USERS_URL);
      setUsers(usertList.data);
      const todosList = await HttpReq(TODOS_URL);
      setTodos(todosList.data);
      const postsList = await HttpReq(POSTS_URL);
      setPosts(postsList.data);
    } catch (error) {
      throw new Error(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const searchUsersHandler = (string) => {
    if (string === "") {
      setIsSearch(false);
      return;
    }

    const filteredList = users.filter((user) => {
      return user.name.includes(string) || user.email.includes(string);
    });

    setFilteredList([...filteredList]);
    setIsSearch(true);
  };

  const updateUserHandler = (updatedUser) => {
    const index = users.findIndex((user) => user.id === updatedUser.id);
    setUsers((latestUsers) => {
      const newUsers = [...latestUsers];
      newUsers[index].name = updatedUser.name;
      newUsers[index].email = updatedUser.email;
      return newUsers;
    });
  };

  const deleteUserDataHandler = (id) => {
    const emptyObj = {
      id: id,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };

    const index = users.findIndex(user => user.id === id);
    setUsers((latestUsers) => {
      const newUsers = [...latestUsers];
      newUsers.splice(index, 1, emptyObj);

      return newUsers;
    });
  };

  return (
    <>
      {isLoading && <PacmanLoading color="blue" />}
      {!isLoading && (
        <div className={styles.mobile_container}>
          <Search onSearch={searchUsersHandler} />
          {!isSearch && (
            <UsersList
              users={users}
              todos={todos}
              onUpdate={updateUserHandler}
              onDelete={deleteUserDataHandler}
            />
          )}
          {isSearch && (
            <UsersList
              users={filteredList}
              todos={todos}
              onUpdate={updateUserHandler}
              onDelete={deleteUserDataHandler}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Users;
