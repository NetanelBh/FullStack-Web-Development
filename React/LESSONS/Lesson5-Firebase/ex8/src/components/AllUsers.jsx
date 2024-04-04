import { useSelector } from 'react-redux';

const AllUsers = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      <h3>All Users:</h3>
      <table border='1'>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllUsers;
