import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/login";
import Register from '../pages/register/register';

const CreateRouter = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/register", element: <Register /> },
    ]);

    return router;
};

export default CreateRouter;
