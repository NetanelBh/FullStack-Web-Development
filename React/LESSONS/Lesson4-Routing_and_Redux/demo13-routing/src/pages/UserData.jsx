const UserData = () => {
  return (
    <div style={{ backgroundColor: 'salmon', width: '400px', height: '400px' }}>
      Name: {sessionStorage['name']} <br />
      Age: {sessionStorage['age']} <br />
    </div>
  );
};

export default UserData;
