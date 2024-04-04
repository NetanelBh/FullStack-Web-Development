import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'pink', width: '400px', height: '400px' }}>
      <h1>Contact Page</h1>
      <h3>Please contact me:</h3>
      <Link to='email'>Email</Link> <br />
      <Link to='phone'>Phone</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
