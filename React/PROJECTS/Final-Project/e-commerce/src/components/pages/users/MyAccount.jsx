import styles from "./MyAccount.module.css";

import { updateDocument } from "../../utils/firebaseActions";
import Card from "../../UI/Card";
import Input from "../../form/Input";
import Button from "../../UI/Button";

import { useRef } from "react";

const MyAccount = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const passRef = useRef();
  const checkboxRef = useRef();
  
  const user = JSON.parse(sessionStorage.getItem('data'));
  const userDetails = JSON.parse(user.title);

  const saveChanges = (event) => {
    event.preventDefault();

    userDetails.first_name = firstNameRef.current.value;
    userDetails.last_name = lastNameRef.current.value;
    userDetails.user_name = userNameRef.current.value;
    userDetails.password = passRef.current.value;
    userDetails.see_orders = checkboxRef.current.checked;

    // const userDetails = {
    //   first_name: firstNameRef.current.value,
    //   last_name: lastNameRef.current.value,
    //   user_name: userNameRef.current.value,
    //   password: passRef.current.value,
    //   see_orders: checkboxRef.current.checked
    // };

    user.title = JSON.stringify(userDetails);
    sessionStorage.setItem('data', JSON.stringify(user));

    updateDocument('users', userDetails.id, userDetails, {merge: true});

    alert("User updated successfully");
  };

  return (
    <div className={styles.outer_container}>
      <Card className={styles.inner_container}>
        <form className={styles.form} onSubmit={saveChanges}>
          <Input
            title="First Name:"
            type="text"
            className={styles.input_container}
            ref={firstNameRef}
            initInput={userDetails.first_name}
          />
          <Input
            title="Last Name:"
            type="text"
            className={styles.input_container}
            ref={lastNameRef}
            initInput={userDetails.last_name}
          />
          <Input
            title="User Name:"
            type="text"
            className={styles.input_container}
            ref={userNameRef}
            initInput={userDetails.user_name}
          />
          <Input
            title="Password:"
            type="text"
            className={styles.input_container}
            ref={passRef}
            initInput={userDetails.password}
          />

          <div className={styles.checkbox_action}>
            <input type="checkbox" id="checkbox" ref={checkboxRef} defaultChecked={userDetails.see_orders}/>
            <span>Allow others to see my orders</span>
          </div>

          <Button title="Save" type="submit" className={styles.btn} />
        </form>
      </Card>
    </div>
  );
};

export default MyAccount;
