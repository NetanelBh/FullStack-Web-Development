import { useState } from "react"
import { getUserFullData } from "./utils"

export default function Ex4Comp() {
    const [user, setUser] = useState({})


    const getUser = async (id) => {
        const data = await getUserFullData(id)
        console.log(data)
        setUser(data)
    
    }

  return (
    <div>

    USER ID: <input onChange={e => getUser(e.target.value)} type="text" /> <br />

    <h3>User Data:</h3>

    name: {user.name} <br />
    email: {user.email} <br />

    <h3>Todos:</h3>
    <ul>
        {user.todos && user.todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>

    <h3>Posts:</h3>

    <ul>
        {user.posts && user.posts.map((post, index) => <li key={index}>{post}</li>)}
    </ul>



    </div>
  )
}
