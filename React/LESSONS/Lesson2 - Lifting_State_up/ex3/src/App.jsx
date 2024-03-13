import { useState } from 'react';
import ChildComp from './ChildComp';

const App = () => {
  const [persons, setPersons] = useState([]);

  const addPerson = (newPer) => {
    setPersons([...persons, newPer]);
  };

  return (
    <div style={{ backgroundColor: 'yellow', width: '500px' }}>
      <h1>Parent Component</h1>
      <ul>
        {persons.map((per, index) => {
          return (
            <li key={index}>
              {per.name} is {per.age} years old, lives in {per.city} and s.he is{' '}
              {per.isAdult ? 'an' : 'not an'} adult
            </li>
          );
        })}
      </ul>
      <ChildComp callback={addPerson} />
    </div>
  );
};

export default App;
