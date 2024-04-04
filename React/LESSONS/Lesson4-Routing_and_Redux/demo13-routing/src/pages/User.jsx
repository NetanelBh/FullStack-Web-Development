import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState({ name: '', age: '' });

  const navigate = useNavigate();

  const next = () => {
    sessionStorage['name'] = user.name;
    sessionStorage['age'] = user.age;

    navigate('/user-data');
  };

  return (
    <div style={{ backgroundColor: 'coral', width: '400px', height: '400px' }}>
      Name:{' '}
      <input
        type='text'
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br />
      Age:{' '}
      <input
        type='number'
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <br />
      <button onClick={next}>User's Data Page</button>
    </div>
  );
};

export default User;
