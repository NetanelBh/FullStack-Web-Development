import { useState, useEffect } from 'react';
import axios from 'axios';

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const ChildComp = ({ userId }) => {
  const [tasksTitles, setTasksTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${TODOS_URL}?userId=${userId}&_limit=5`
      );
      const titles = data.map((todo) => todo.title);
      setTasksTitles(titles);
    };
    fetchData();
  }, [userId]);

  return (
    <>
      <ul>
        {tasksTitles.map((title, index) => {
          return <li key={index}>{title}</li>;
        })}
      </ul>
    </>
  );
};

export default ChildComp;
