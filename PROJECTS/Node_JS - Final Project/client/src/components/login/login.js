import { useRef } from "react";
import styles from "./login.module.css";

const Login = ({ onSubmit }) => {
  const userRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const url = "http://localhost:3001/auth/login";
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: { user: userRef.current.value, email: emailRef.current.value },
    };

    onSubmit(url, config);
  };

  return (
    <form onSubmit={submitHandler} className={styles.login_main}>
      <div className={styles.header}>
        <h1>Login To System</h1>
      </div>
      <div className={styles.username}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          defaultValue="Kamren"
        ></input>
      </div>
      <div className={styles.email}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          defaultValue="Lucio_Hettinger@annie.ca"
        ></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
