import { useSelector } from 'react-redux';

const CounterViewer = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div
      style={{ backgroundColor: 'gold', width: '200px', textAlign: 'center' }}
    >
      <h2>Counter Viewer</h2>
      {counter}
    </div>
  );
};

export default CounterViewer;
