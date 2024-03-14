import styles from "./Child.module.css";

import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../UI/Card";
import ChildList from "./ChildList";
import PacmanLoading from "../UI/PacmanLoading";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const Child = ({ id }) => {
  const [tasks, setTasks] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsFetched(false);

      const url = `${BASE_URL}?userId=${id}&_limit=5`;
      try {
        const resp = await axios.get(url);
        setTasks(resp.data);
      } catch (error) {
        throw new Error(error);
      }

      setIsLoading(false);
      setIsFetched(true);
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.container}>
      {isLoading && <PacmanLoading />}
      {!isLoading && isFetched && 
        <Card className={styles.card}>
          <ChildList data={tasks}/>
        </Card>}
    </div>
  );
};

export default Child;
