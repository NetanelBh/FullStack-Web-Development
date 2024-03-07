const ChildComp = ({ callback }) => {
  const handleChange = (e) => {
    callback(e.target.value);
  };

  return (
    <>
      <h3>Child Component</h3>
      Send To Parent: <input type='text' onChange={handleChange} />
    </>
  );
};

export default ChildComp;
