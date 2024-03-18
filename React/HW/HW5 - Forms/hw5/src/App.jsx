import { useRef } from 'react';
import styles from './App.module.css';

import axios from 'axios';

const App = () => {
  const id = useRef();
  const name = useRef();
  const email = useRef();

  const getDataHandler = async () => {
    const userId = id.current.value;
    const USERS_URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
    try {
      const resp = await axios.get(USERS_URL);
      name.current.value = resp.data.name;
      email.current.value = resp.data.email;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateHandler = async () => {
    const userId = id.current.value;
    const USERS_URL = `https://jsonplaceholder.typicode.com/posts/${userId}`;
    const updatedObj = {name: name.current.value, email: email.current.value};

    try {
      const resp = await axios.put(USERS_URL, updatedObj);
      console.log(resp.data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.user_id}>
        <label htmlFor="user">User ID: </label>
        <input type="number" min={1} max={10} ref={id}/>
        <button onClick={getDataHandler}>Get Data</button>
      </div>

      <div className={styles.text}>
        <label htmlFor="name">Name: </label>
        <input type="text" className={styles.name} ref={name}/>
      </div>

      <div className={styles.text}>
        <label htmlFor="email">Email: </label>
        <input type="text" className={styles.email} ref={email}/>
      </div>

      <button className={styles.btn} onClick={updateHandler}>Update</button>
    </div>
  )
}

export default App
