import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../utils';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll(USERS_URL);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Usernames</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.username}</Link>
              {/* <Link to={user.id.toString()}>{user.username}</Link> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
