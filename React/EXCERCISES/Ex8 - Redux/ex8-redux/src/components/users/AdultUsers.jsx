import { useSelector } from "react-redux";

import Header from "./Header";
import UsersList from "./UsersList";

const AdultUsers = () => {
  const users = useSelector((state) => state.users);

  const filteredList = users.filter(user => user.age >= 18);

  return (
    <>
      <Header title="Adult Users" />
      <UsersList users={filteredList} />
    </>
  );
};

export default AdultUsers