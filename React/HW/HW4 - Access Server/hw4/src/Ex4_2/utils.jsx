import axios from 'axios';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';


const getUserTodos = (userId) => {
    return axios.get(`${todosUrl}?userId=${userId}`);
}

const getAllUsers = async () => {
   

    return axios.get(usersUrl);
}


export { getAllUsers, getUserTodos }
