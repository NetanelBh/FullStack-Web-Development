
export default function Ex4_2Tasks(props) {
  return (
    <div style={{border: "1px solid black", width: "fit-content"}}>
        <b>Tasks</b>
        <ul>
            {props.todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </div>
  )
}
