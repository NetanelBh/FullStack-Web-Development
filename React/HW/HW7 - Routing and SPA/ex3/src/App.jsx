import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Input from "./components/pages/Input";
import CityPage from "./components/pages/CityPage";
import HelloPage from "./components/pages/HelloPage";
import DetailsPage from "./components/pages/DetailsPage";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HelloPage /> },
    { path: "/input", element: <Input /> },
    { path: "/city", element: <CityPage /> },
    { path: "/details", element: <DetailsPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
