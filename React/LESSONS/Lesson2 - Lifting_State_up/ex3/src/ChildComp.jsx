import { useState } from 'react';

const ChildComp = ({ callback }) => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    city: '',
    isAdult: false,
  });

  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h3>Child Component</h3>
      Name:{' '}
      <input
        type='text'
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <br />
      Age:{' '}
      <input
        type='text'
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      />
      <br />
      City:{' '}
      <select
        defaultValue=''
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
      >
        <option value='' />
        <option value='Haifa'>Haifa</option>
        <option value='Eilat'>Eilat</option>
        <option value='Afula'>Afula</option>
      </select>
      <br />
      Is Adult?{' '}
      <input
        type='checkbox'
        onChange={(e) => setPerson({ ...person, isAdult: e.target.checked })}
      />
      <br />
      <button onClick={() => callback({ ...person })}>Add</button>
    </div>
  );
};

export default ChildComp;
