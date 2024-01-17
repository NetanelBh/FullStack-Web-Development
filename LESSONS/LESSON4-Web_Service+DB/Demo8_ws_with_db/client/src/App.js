import Card from "./components/Card";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchPersons = useCallback(async () => {
    try {
      const resp = await fetch("/persons");
      const persons = await resp.json();
      setData(persons);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);

  return (
    <Card>
      <h1>Persons names:</h1>
      {data && (
        <ul style={{ listStyleType: "none" }}>
          {data.map((person) => (
            <li>
              {person.id} {person.name} {person.city}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default App;
