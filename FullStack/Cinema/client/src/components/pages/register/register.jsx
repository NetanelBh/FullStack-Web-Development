import styles from "./register.module.css";

import Header from "../../genericComp/header";
import Input from "../../genericComp/input";
import Button from "../../UI/button";
import Card from "../../UI/card";
import { useRef } from "react";

const Register = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    return (
        <div className={styles.container}>
            <Header text="Create an Account" />
            <Card className={styles.card_container}>
                <form className={styles.form}>
                    <div className={styles.input_container}>
                        <Input title="User Name" type="text" ref={usernameRef} />
                    </div>
                    <div className={styles.input_container}>
                        <Input title="Password" type="text" ref={passwordRef} />
                    </div>

                    <Button className={styles.button} text="Register" type="submit" onClick={""} />
                </form>
            </Card>
        </div>
    );
};

export default Register;
