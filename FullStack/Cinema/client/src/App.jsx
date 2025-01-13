import { RouterProvider } from 'react-router-dom';

import CreateRouter from './components/utils/createRouter';

const App = () => {
  const router = CreateRouter();

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
