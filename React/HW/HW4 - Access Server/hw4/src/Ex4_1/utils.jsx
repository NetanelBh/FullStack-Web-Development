import axios from "axios"


const urlUsers = "https://jsonplaceholder.typicode.com/users"
const urlPosts = "https://jsonplaceholder.typicode.com/posts"
const urlTodos = "https://jsonplaceholder.typicode.com/todos"


// Add a utils service with a function called “getUserFullData” that receives a user id
// and returns a json with the following data:
// - name - from https://jsonplaceholder.typicode.com/users
// - email - from https://jsonplaceholder.typicode.com/users
// - todos : his first 5 todo’s titles from https://jsonplaceholder.typicode.com/todos
// - posts : : his first post’s titles from https://jsonplaceholder.typicode.com/posts

// Show all the data in the component

async function getUserFullData(id) {
    const {data: user} = await axios.get(`${urlUsers}/${id}`)
    const {data: todos} = await axios.get(`${urlTodos}?userId=${id}`)
    const {data: posts} = await axios.get(`${urlPosts}?userId=${id}`)
    return {
        name: user.name,
        email: user.email,
        todos: todos.slice(0, 5).map(todo => todo.title),
        posts: posts.slice(0, 5).map(post => post.title)
    }
    
}

export { getUserFullData }