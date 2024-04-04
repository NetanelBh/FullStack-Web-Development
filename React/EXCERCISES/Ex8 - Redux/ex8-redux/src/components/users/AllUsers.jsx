import { useSelector } from "react-redux";

import Header from "./Header";
import UsersList from "./UsersList";

const AllUsers = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      <Header title="All Users" />
      <UsersList users={users} />
    </>
  );
};

export default AllUsers;
