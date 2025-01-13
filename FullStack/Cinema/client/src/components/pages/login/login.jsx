import styles from "./login.module.css";

import Card from "../../UI/card";
import Button from "../../UI/button";
import Input from "../../genericComp/input";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
    const [isValidUser, setIsValidUser] = useState(true);
    const [isValidPassword, setIsValidpassword] = useState(true);

    useEffect(() => {
        const 
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
        setIsValidUser(true);
        setIsValidpassword(true);
    };

    return (
        <div className={styles.container}>
            <header>Welcome To Netanel Cimema</header>

            <Card className={styles.card_container}>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.input_container}>
                        <Input label="username" type="text" />
                        {!isValidUser && <p>Invalid Username</p>}
                    </div>
                    <div className={styles.input_container}>
                        <Input label="password" type="password" />
                        {!isValidPassword && <p>Invalid password</p>}
                    </div>
                    <Button className={styles.button} text="Login" type="submit" onClick={submitHandler} />
                </form>
            </Card>

            <span className={styles.register}>
                New User? <NavLink to={'/register'}>Create an account</NavLink>
            </span>
        </div>
    );
};

export default Login;
