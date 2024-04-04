import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const User = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ id: '', fName: '', lName: '', age: '' });

  useEffect(() => {
    const fetchData = async () => {
      let { data: users } = await axios.get(USERS_URL);
      users = users.map((user) => {
        const fullName = user.name.split(' ');
        return {
          id: user.id,
          fName: fullName[0],
          lName: fullName[1],
          age: Math.round(Math.random() * 100 + 1),
        };
      });
      dispatch({ type: 'LOAD', payload: users });
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    dispatch({ type: 'ADD', payload: { ...user } });
  };

  const updateUser = () => {
    dispatch({ type: 'UPDATE', payload: { ...user } });
  };

  const deleteUser = () => {
    dispatch({ type: 'DELETE', payload: user.id });
  };

  return (
    <>
      <h1>User's Data</h1>
      ID: <input type='number' name='id' onChange={handleChange} />
      <br />
      First Name: <input type='text' name='fName' onChange={handleChange} />
      <br />
      Last Name: <input type='text' name='lName' onChange={handleChange} />
      <br />
      Age: <input type='number' name='age' onChange={handleChange} />
      <br />
      <button onClick={addUser}>Add</button>
      <button onClick={updateUser}>Update</button>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
};

export default User;
