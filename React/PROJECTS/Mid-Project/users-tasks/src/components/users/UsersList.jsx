import styles from "./UsersList.module.css";

import Card from "../UI/Card";
import UserListItem from "./UserListItem";

const UsersList = ({ users, todos, onUpdate, onDelete }) => {
  return (
    <ul>
      {users.map((user) => {
        let style = "completed_border";
        todos.forEach((todo) => {
          if (user.id === todo.userId && todo.completed === false) {
            style = "uncompleted_border";
          }
        });

        return (
          <Card className={`${styles[style]}`} key={user.id}>
            <UserListItem
              user={user}
              onUpdate={(updatedUser) => onUpdate(updatedUser)}
              onDelete={(id) => onDelete(id)}
            />
          </Card>
        );
      })}
    </ul>
  );
};

export default UsersList;
