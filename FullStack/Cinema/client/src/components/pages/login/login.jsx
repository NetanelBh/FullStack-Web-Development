import styles from "./login.module.css";
import axios from "axios";

import Card from "../../UI/card";
import Button from "../../UI/button";
import Input from "../../genericComp/input";
import Header from "../../genericComp/header";

import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [isValidUser, setIsValidUser] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const submitHandler = async (event) => {
        event.preventDefault();

        setIsValidUser(true);
        setIsValidPassword(true);

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        
        const url = "http://localhost:3000/auth/login";
        try {
            const resp = await axios.post(url, { username, password });
            if (resp.data.status === "failed" && resp.data.data.includes("username")) {
                setIsValidUser(false);
                return;
            } else if (resp.data.status === "failed" && resp.data.data.includes("password")) {
                setIsValidPassword(false);
                return;
            } else {
                // If user authenticated, will save the token in local storage
                localStorage.setItem("token", resp.token);
                localStorage.setItem("username", username);

                // Create the navigations bar headers for the layout component
                const navBarHeaders = {
                    headers: [
                        { header: "Movies", navigateTo: "/layout/movies" },
                        { header: "Subscriptions", navigateTo: "/layout/subscriptions" },
                        { header: "Logout", navigateTo: "/layout/logout" },
                    ],
                };
                // To admin there is another tab in navigation bar - manage employees
                if (resp.admin) {
                    navBarHeaders.headers.splice(2, 0, {
                        header: "Employees Management",
                        navigateTo: "/layout/employees",
                    });
                }

                // Store the headers to use them in the generic layout component to create navigations bar
                sessionStorage.setItem("headers", JSON.stringify(navBarHeaders));

                navigate("/layout")
            }
        } catch (error) {
            console.log(error.message);
            return;
        }
    };

    return (
        <div className={styles.container}>
            <Header text="Welcome To Netanel Cimema" />

            <Card className={styles.card_container}>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.input_container}>
                        <Input title="username" type="text" ref={usernameRef} />
                        {!isValidUser && <p>Invalid Username</p>}
                    </div>

                    <div className={styles.input_container}>
                        <Input title="password" type="password" ref={passwordRef} />
                        {!isValidPassword && <p>Invalid password</p>}
                    </div>
                    <Button className={styles.button} text="Login" type="submit" onClick={submitHandler} />
                </form>
            </Card>

            <span className={styles.register}>
                New Employee? <NavLink to={"/register"}>Create an account</NavLink>
            </span>
        </div>
    );
};

export default Login;
