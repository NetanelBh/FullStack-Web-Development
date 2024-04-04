import { useDispatch } from 'react-redux';

const CounterChanger = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT', payload: 1 });
  };

  return (
    <div
      style={{ backgroundColor: 'cyan', width: '200px', textAlign: 'center' }}
    >
      <h2>Counter Changer</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterChanger;
