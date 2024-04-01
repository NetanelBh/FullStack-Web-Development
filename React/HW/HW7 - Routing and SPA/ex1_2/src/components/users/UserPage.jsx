import styles from "./UserPage.module.css";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import Card from "../UI/Card";
import NavBar from "../navBar/NavBar";
import PacmanLoading from "../UI/PacmanLoading";

const UserPage = () => {
  const [isTodoClicked, setIsTodoClicked] = useState(false);
  const [isPostClicked, setIsPostClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  const data = JSON.parse(sessionStorage.getItem("data"));

  const fetchData = useCallback(async () => {
    let url = `https://jsonplaceholder.typicode.com/todos?userId=${data.id}`;
    if (isPostClicked) {
      url = `https://jsonplaceholder.typicode.com/posts?userId=${data.id}`;
    }

    setIsLoading(true);
    try {
      const resp = await axios.get(url);
      setFetchedData(resp.data);
    } catch (error) {
      throw new Error(error.message);
    }

    setIsLoading(false);
  }, [isPostClicked]);

  useEffect(() => {
    if (isPostClicked === isTodoClicked) {
      return;
    }

    fetchData();
  }, [isTodoClicked, isPostClicked, fetchData]);

  const linkClickHandler = (linkType) => {
    if (linkType === "todos") {
      // if pressed again, will update it to false and close the todos
      setIsTodoClicked((latestState) => !latestState);
      setIsPostClicked(false);
    } else if (linkType === "posts") {
      // if pressed again, will update it to false and close the posts
      setIsPostClicked((latestState) => !latestState);
      setIsTodoClicked(false);
    }
  };

  return (
    <>
      <Card className={styles.container}>
        <div className={styles.details_container}>
          <p className={`${styles.font_size} ${styles.name_label}`}>Name:</p>
          <p className={`${styles.font_size} ${styles.color}`}>{data.name}</p>
        </div>
        <div className={styles.details_container}>
          <p className={`${styles.font_size} ${styles.name_label}`}>Email:</p>
          <p className={`${styles.font_size} ${styles.color}`}>{data.email}</p>
        </div>
        <div className={styles.details_container}>
          <p className={`${styles.font_size} ${styles.name_label}`}>City:</p>
          <p className={`${styles.font_size} ${styles.color}`}>{data.city}</p>
        </div>
      </Card>

      <NavBar onClick={linkClickHandler} />

      {isLoading && <PacmanLoading color={'rgb(122, 0, 122)'}/>}
      {!isLoading && (isTodoClicked || isPostClicked ) && (
        <Card className={styles.titles}>
          <ul>
            {fetchedData.map((user, i) => {
              return <li key={i}>{user.title}</li>;
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default UserPage;
