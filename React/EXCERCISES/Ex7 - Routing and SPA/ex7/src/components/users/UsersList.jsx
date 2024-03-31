import styles from "./UsersList.module.css";

import UsersListItem from "./UsersListItem";

const UsersList = ({ users }) => {
  return (
    <>
      <h1>Users List:</h1>
      <ul>
        {users.map((user, i) => (
          <UsersListItem user={user} key={i} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
