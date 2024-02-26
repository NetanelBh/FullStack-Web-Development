import { useState } from "react";

function Ex2Comp() {

  const [persons, setPerson] = useState([{name : "Avi", age : 20, city:"Eilat"},
                                        {name : "Dana", age : 30, city:"Haifa"},
                                        {name : "Gil", age : 40, city:"Jerusalem"}])

  const [per, setPer] = useState({name : "", age : 0, city : ""})

  const addPer = () =>
  {
    setPerson([...persons, per]);
  }

  return (
    <div>

      Name : <input onChange={e => setPer({...per, name : e.target.value}) } type="text" /> <br/>
      Age : <input onChange={e => setPer({...per, age : e.target.value}) } type="text" /> <br/>
      City : <input onChange={e => setPer({...per, city : e.target.value}) } type="text" /> <br/>

      <button onClick={addPer}>Add</button>

      <table border={1}>
        {
          persons.map((per, index) =>
          {
            return <tr key={index}>
              <td>{per.name}</td>
              <td>{per.age}</td>
              <td>{per.city}</td>
            </tr>
          })
        }
      </table>

      <ul>
        {
          persons.map((per, index) =>
          {
            return <li key={index}>
              {per.name}
              <ul>
                <li>{per.age}</li>
                <li>{per.city}</li>
              </ul>
            </li>
          })
        }
      </ul>
      

    </div>
  );
}

export default Ex2Comp;
