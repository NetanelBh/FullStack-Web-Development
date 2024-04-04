import { useState } from 'react';
import ChildComp from './ChildComp';

const App = () => {
  const [userId, setUserId] = useState('');

  return (
    <>
      User ID:{' '}
      <input type='number' onChange={(e) => setUserId(e.target.value)} />
      <br />
      <ChildComp userId={userId} />
    </>
  );
};

export default App;
