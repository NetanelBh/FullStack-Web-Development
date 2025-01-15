import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Layout from "../pages/layout/layout";
import Movies from "../pages/movies/movies";
import Subscriptions from "../pages/subscriptions/subscriptions";
import Employees from "../pages/employees/employees";
import Logout from "../pages/logout/logout";

const CreateRouter = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
            path: "/layout",
            element: <Layout />,
            children: [
                { path: "/layout/movies", element: <Movies /> },
                { path: "/layout/subscriptions", element: <Subscriptions /> },
                { path: "/layout/employees", element: <Employees /> },
                { path: "/layout/logout", element: <Logout /> },
            ],
        },
    ]);

    return router;
};

export default CreateRouter;
