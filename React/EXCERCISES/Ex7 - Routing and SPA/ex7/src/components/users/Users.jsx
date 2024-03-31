import styles from "./Users.module.css";
import { useEffect } from "react";

import UsersList from "./UsersList";
import useHttpReq from "../hooks/useHttpReq";
import PacmanLoading from "../UI/PacmanLoading";

const URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const { isLoading, fetchedData: users, fetchFnc } = useHttpReq();

  useEffect(() => {
    fetchFnc(URL);
  }, []);

  return (
    <div className={styles.main}>
      {isLoading && <PacmanLoading color="black" className={styles.height} />}
      {!isLoading && <UsersList users={users}/>}
    </div>
  );
};

export default Users;
