import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../utils';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const User = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getById(USERS_URL, id);
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>{user.username}'s Details</h3>
      <strong>Name:</strong> {user.name} <br />
      <strong>Email:</strong> {user.email} <br />
      <strong>City:</strong> {user.address?.city} <br />
    </>
  );
};

export default User;
