import styles from "./UserListItem.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const UserListItem = ({ user, onUpdate, onDelete }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const updateHandler = () => {
    const data = {name, email, id: user.id};
    onUpdate(data);
  };

  return (
    <li>
      <div className={styles.container}>
        <div>
          <p>
            <span className={styles.underline}>ID:</span>
            {user.id}
          </p>
        </div>

        <div className={styles.details}>
          <span className={styles.underline}>Name:</span>
          <input
            type="text"
            name="fullName"
            className={styles.input}
            value={user.name}
            onChange={nameChangeHandler}
          />
        </div>

        <div className={styles.details}>
          <span className={styles.underline}>Email:</span>
          <input
            type="text"
            name="mail"
            className={styles.input}
            value={user.email}
            onChange={emailChangeHandler}
          />
        </div>

        <section className={styles.other_data}>Other Data</section>
        <div className={styles.additional_section}>
          <Card className={styles.additional_data}>
            <div className={`${styles.details} ${styles.additional_container}`}>
              <span className={styles.underline}>Street:</span>
              <input
                name="street"
                className={`${styles.street_input} ${styles.additional_input}`}
                value={user.address.street}
                readOnly
              />
            </div>
            <div className={`${styles.details} ${styles.additional_container}`}>
              <span className={styles.underline}>City:</span>
              <input
                name="city"
                className={`${styles.city_input} ${styles.additional_input}`}
                value={user.address.city}
                readOnly
              />
            </div>
            <div className={`${styles.details} ${styles.additional_container}`}>
              <span className={styles.underline}>Zip Code:</span>
              <input
                name="postal"
                className={`${styles.postal_input} ${styles.additional_input}`}
                value={user.address.zipcode}
                readOnly
              />
            </div>
          </Card>
        </div>

        <div className={styles.actions}>
          <Button
            type="button"
            title="Update"
            onClick={updateHandler}
            className={`${styles.btn} ${styles.update}`}
          />
          <Button
            type="button"
            title="Delete"
            onClick={() => onDelete(user.id)}
            className={`${styles.btn} ${styles.delete}`}
          />
        </div>
      </div>
    </li>
  );
};

export default UserListItem;
