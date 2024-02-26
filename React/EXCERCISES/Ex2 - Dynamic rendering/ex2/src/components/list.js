const ListData = (props) => {
  return (
    <ul>
      {props.persons.map((person, index) => {
        return (
          <li key={index}>
            {person.name}
            <ul>
              <li>{person.age}</li>
              <li>{person.city}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default ListData;
