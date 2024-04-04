import axios from 'axios';

const getAll = (url) => axios.get(url);

const getById = (url, id) => axios.get(`${url}/${id}`);

export { getAll, getById };
