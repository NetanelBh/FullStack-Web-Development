import styles from "./UsersList.module.css";

import UserListItem from "./UserListItem";

const UsersList = ({users}) => {
  return (
    <ul className={styles.grid}>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
