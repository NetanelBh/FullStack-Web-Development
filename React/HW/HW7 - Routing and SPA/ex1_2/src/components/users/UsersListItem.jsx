import styles from "./UsersListItem.module.css";

import { Link } from "react-router-dom";

const UsersListItem = ({ user }) => {
  const setDataHandler = () => {
    const data = {
      name: user.name,
      email: user.email,
      city: user.address.city,
      id: user.id,
    };

    sessionStorage.clear();
    sessionStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <li>
      <Link className={styles.link} to="/user" onClick={setDataHandler}>
        {user.name}
      </Link>
    </li>
  );
};

export default UsersListItem;
