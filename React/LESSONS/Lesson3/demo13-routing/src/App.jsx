import { Routes, Route, Link } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';

const App = () => {
  return (
    <>
      <h1>Welcome to React Router</h1>
      <Link to='/'>Homepage</Link> <br />
      <Link to='/about'>About Page</Link> <br />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default App;
