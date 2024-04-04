import styles from "./UserListItem.module.css";

const UserListItem = ({user}) => {
  return (
    <>
      <li className={styles.li} key={user.id}>{user.id}</li>
      <li className={styles.li} key={user.firstName}>{user.firstName}</li>
      <li className={styles.li} key={user.lastName}>{user.lastName}</li>
      <li className={styles.li} key={user.age}>{user.age}</li>
    </>
  );
};

export default UserListItem;
