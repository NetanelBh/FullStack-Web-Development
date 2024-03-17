import { useState } from "react"
import { getAllUsers } from "./utils"

import Ex4_2User from "./Ex4_2User";
export default function Ex4_2Users() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const { data } = await getAllUsers();
        setUsers(data);
    }
    return (
        <div style={{border: "1px solid black"}}>

        <b>Users</b> <button onClick={fetchUsers}>Get Data</button>


        {
            users.map((user) => <Ex4_2User key={user.id} user={user} />)
        }

        </div>
    )
}
