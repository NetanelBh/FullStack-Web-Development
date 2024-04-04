import { Routes, Route, Link } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';

import Contact from './pages/Contact'
import ContactEmail from './pages/ContactEmail'
import ContactPhone from './pages/ContactPhone'

import Products from './pages/Products'
import Product from './pages/Product'

import User from './pages/User'
import UserData from './pages/UserData'

const App = () => {
  return (
    <>
      <h1>Welcome to React Router</h1>
      <Link to='/'>Homepage</Link> <br />
      <Link to='/about'>About Page</Link> <br />
      <Link to='/contact'>Contact Page</Link> <br />
      <Link to='/products'>Products Page</Link> <br />
      <Link to='/user'>User Page</Link> <br />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />

        {/* Nested Routes */}
        <Route path='/contact' element={<Contact />} >
          <Route path='email' element={<ContactEmail />} />
          <Route path='phone' element={<ContactPhone />} />
        </Route>

        {/* Dynamic Routing - Params */}
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id/:name' element={<Product />} />

        {/* Session Storage */}
        <Route path='/user' element={<User />} />
        <Route path='/user-data' element={<UserData />} />
      </Routes>
    </>
  );
};

export default App;
