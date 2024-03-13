import { useState } from "react";
import axios from "axios";

import UserForm from "./components/users/UserForm";
import UserData from "./components/users/UserData";
import PacmanLoading from './components/UI/PacmanLoading';

const App = () => {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const getUserData = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users?id=${id}`;
    const data = {};

    setIsLoading(true);

    try {
      const usersResp = await axios.get(url);
      data.name = usersResp.data[0].name;
      data.email = usersResp.data[0].email;

      if(usersResp.data[0].name.startsWith('E')) {
        try {
          const url = `https://jsonplaceholder.typicode.com/todos?userId=${id}`
          const todosResp = await axios.get(url);
          const titlesList = todosResp.data.map(todo => todo.title);
          data.titles = [...titlesList];
        } catch (error) {
          throw new Error(error);
        }
      }
    } catch (error) {
      throw new Error(error);
    }

    setIsLoading(false);
    setIsFetched(true);
    setContent(data);
  };

  return (
    <>
      <UserForm onSubmit={getUserData} />
      {isLoading && <PacmanLoading color='rgb(95, 149, 248)'/>}
      {!isLoading && isFetched && <UserData data={content}/>}
    </>
  );
};

export default App;
