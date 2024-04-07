import { useState, useMemo } from "react"
import List from "./List"


const users = [
  { id: 1, name: "Avi" },
  { id: 2, name: "Dana" },
  { id: 3, name: "Ron" },
]

function App() {
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")


  const filteredUsers = useMemo(() => users.filter((user) => {
    console.log("filtered users")
    return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  }), [search])



  return (
    <div style={{ border: "5px solid red" }}>
      {console.log("app render")}
      <input onChange={(e) => setText(e.target.value)} type="text" /> <br />
      <button onClick={() => setSearch(text)}>Search</button>

      <List users={filteredUsers} />
    </div>
  )
}

export default App
