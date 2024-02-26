const TableData = (props) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {props.persons.map((person, index) => {
          return (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
