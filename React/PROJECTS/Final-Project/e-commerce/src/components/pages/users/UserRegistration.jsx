import styles from "./UserRegistration.module.css";

import db from "../../firebase";
import {addDoc, collection} from 'firebase/firestore';

import Card from "../../UI/Card";
import Input from "../../form/Input";
import Button from "../../UI/Button";

import { useRef } from "react";

const UserRegistration = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const passRef = useRef();
  const checkboxRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      admin: false,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      password: passRef.current.value,
      see_orders: checkboxRef.current.checked,
      user_name: userNameRef.current.value
    };

    console.log(user);
    addDoc(collection(db, 'users'), user);
  };

  return (
    <div className={styles.outer_container}>
      <Card className={styles.inner_container}>
        <section className={styles.section}>
          <span>New User</span>
          <span>Registration</span>
        </section>
        <form className={styles.form} onSubmit={submitHandler}>
          <Input
            title="First Name:"
            type="text"
            className={styles.input_container}
            ref={firstNameRef}
          />
          <Input
            title="Last Name:"
            type="text"
            className={styles.input_container}
            ref={lastNameRef}
          />
          <Input
            title="User Name:"
            type="text"
            className={styles.input_container}
            ref={userNameRef}
          />
          <Input
            title="Password:"
            type="text"
            className={styles.input_container}
            ref={passRef}
          />

          <div className={styles.checkbox_action}>
            <input type="checkbox" id="checkbox" ref={checkboxRef}/>
            <span>Allow others to see my orders</span>
          </div>

          <Button title='Create' type='submit' className={styles.btn} />
        </form>
      </Card>
    </div>
  );
};

export default UserRegistration;
