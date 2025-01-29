import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/login";
import Register from "../pages/register/register";

import MainLayout from "../UI/layouts/mainLayout";
import Movies from "../pages/movies/movies";
import Subscriptions from "../pages/subscriptions/subscriptions";

import WebContentLayout from "../UI/layouts/WebContentLayout";
import AddEmployee from "../pages/employees/addEmployee";
import AllEmployees from "../pages/employees/AllEmployees";
import EditEmployee from "../pages/employees/editEmployee";

const CreateRouter = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
            path: "/layout",
            element: <MainLayout />,
            children: [
                {
                    path: "/layout/WebContentLayout",
                    element: <WebContentLayout />,
                    children: [
                        { path: "/layout/WebContentLayout/employees/all", element: <AllEmployees /> },
                        { path: "/layout/WebContentLayout/employees/add", element: <AddEmployee /> },
                        { path: "/layout/WebContentLayout/movies/all", element: <Movies /> },
                        { path: "/layout/WebContentLayout/movies/add", element: <Movies /> },
                        { path: "/layout/WebContentLayout/subscriptions/all", element: <Subscriptions /> },
                        { path: "/layout/WebContentLayout/subscriptions/add", element: <Subscriptions /> },
                    ],
                },
                {path: "/layout/editEmployee", element: <EditEmployee />},
            ],
        },
    ]);

    return router;
};

export default CreateRouter;
