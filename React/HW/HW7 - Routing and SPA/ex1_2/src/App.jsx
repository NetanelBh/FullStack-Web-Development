import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Users from './components/users/Users';
import UserPage from './components/users/UserPage';

const App = () => {
  const router = createBrowserRouter([
    {path: '/', element: <Users />},
    {path: '/user', element: <UserPage />},
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
