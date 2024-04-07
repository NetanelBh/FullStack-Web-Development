import { useState, useMemo, useCallback } from "react"
import List from "./List"
import { v4 as uuid } from "uuid"



function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Avi" },
    { id: 2, name: "Dana" },
    { id: 3, name: "Ron" },
  ])

  const [name, setName] = useState("")


  const handleRemove = useCallback((id) => {
    setUsers(users.filter((user) => user.id !== id))
  } ,[users])




  return (
    <div style={{ border: "5px solid red" }}>
      {console.log("app render")}

      <input type="text" placeholder="name" onChange={e => setName(e.target.value)} /> <br />
      <button onClick={() => setUsers([...users, { id: uuid(), name: name }])}>Add</button>

      <List handleRemove={handleRemove} users={users} />
    </div>
  )
}

export default App
