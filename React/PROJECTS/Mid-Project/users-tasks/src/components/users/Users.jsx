import styles from "./Users.module.css";

import { useState, useEffect, useCallback } from "react";

import Posts from "../posts/Posts";
import Todos from "../todos/Todos";
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
  // Save the entered search letters by the user
  const [searchLetters, setSearchLetters] = useState("");
  // Flag to store the state that the user used search bar
  const [isSearch, setIsSearch] = useState(false);
  // If the user pressed on specific user id to show his tasks and posts
  const [selectedUserId, setSelectedUserId] = useState(0);
  // Flag to determine if the user pressed on specific user id
  const [isSelectedId, setIsSelectedId] = useState(false);

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

  const searchUsersHandler = (searchLet) => {
    if (searchLet === "") {
      setIsSearch(false);
      setSearchLetters("");
      return;
    }

    setSearchLetters(searchLet);
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

    const index = users.findIndex((user) => user.id === id);
    setUsers((latestUsers) => {
      const newUsers = [...latestUsers];
      newUsers.splice(index, 1, emptyObj);

      return newUsers;
    });
  };

  const selectSpecificUserHandler = (id) => {
    // If pressed twice on the same id, the selected user will removed
    if (id === selectedUserId) {
      setIsSelectedId(false);
      setSelectedUserId(0);
      return;
    }

    setIsSelectedId(true);
    setSelectedUserId(id);
  };

  // Filter the users list if some letters entered by the user for search
  let filteredList = users;
  if (isSearch) {
    filteredList = users.filter((user) => {
      return (
        user.name.includes(searchLetters) || user.email.includes(searchLetters)
      );
    });
  }

  // If user id selected, will filter the lists according to the user id
  let userTodos = todos;
  let userPosts = posts;
  if(isSelectedId) {
    userTodos = todos.filter((todo) => todo.userId === selectedUserId);
    userPosts = posts.filter((post) => post.userId === selectedUserId);
  }

  return (
    <>
      {isLoading && <PacmanLoading color="blue" />}
      {!isLoading && (
        <div className={styles.main}>
          <div className={styles.mobile_container}>
            <Search onSearch={searchUsersHandler} />
            <UsersList
              users={filteredList}
              todos={todos}
              onUpdate={updateUserHandler}
              onDelete={deleteUserDataHandler}
              onIdSelect={selectSpecificUserHandler}
            />
          </div>

          {isSelectedId && (
            <div className={styles.tasks_container}>
              <Todos todos={userTodos} userId={selectedUserId}/>
              <Posts posts={userPosts} userId={selectedUserId}/>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Users;
