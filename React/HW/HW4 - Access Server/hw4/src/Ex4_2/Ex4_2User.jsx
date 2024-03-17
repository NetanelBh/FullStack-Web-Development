import { useState } from "react";
import Ex4_2Tasks from "./Ex4_2Tasks";
import { getUserTodos } from "./utils";
export default function Ex4_2User(props) {
    const [todos, setTodos] = useState([]);
    const [isExist, setIsExist] = useState(false);


    const fetchTodos = async () => {
        const { data } = await getUserTodos(props.user.id);
        setTodos(data.splice(0, 5));
        setIsExist(true);
    }

    return (
        <div style={{ border: "1px solid black" }}>

            User ID: {props.user.id}  <br />
            Name : {props.user.name} <br />
            Email : {props.user.email} <br />
            <button onClick={() => fetchTodos()}>Tasks</button>

          {isExist ?  <Ex4_2Tasks todos={todos} /> : null} 
          

        </div>
    )
}
