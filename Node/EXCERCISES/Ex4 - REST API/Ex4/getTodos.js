import axios from "axios";

const GetTodos = async (url) => {
  return await axios.get(url);
};

export default GetTodos;