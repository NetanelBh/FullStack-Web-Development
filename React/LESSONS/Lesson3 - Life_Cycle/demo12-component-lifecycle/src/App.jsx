import { useState, useEffect } from 'react';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  // #1 - Will run after every render
  useEffect(() => {
    console.log('Every render');
  });

  // #2 - Will run once - at the comp creation (Mounting)
  useEffect(() => {
    console.log('At Mounting');
    const fetchData = async () => {
      const { data } = await axios.get(USERS_URL);
      setUsers(data);
    };
    fetchData();
  }, []); // Dependency List

  // #3 - Will run only if one or more from the dependency list updates
  useEffect(() => {
    console.log('counter:', counter);
  }, [counter]);

  useEffect(() => {
    console.log('name:', name);
  }, [name]);

  return (
    <>
      <h1>Hello World</h1>
      1st User's Name: {users[0]?.name}
      <br /> <br />
      <button onClick={() => setCounter(counter + 1)}>Add 1</button>
      <br />
      Counter: {counter}
      <br /> <br />
      Enter your name:{' '}
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <br />
      Your name is: {name}
    </>
  );
};

export default App;
