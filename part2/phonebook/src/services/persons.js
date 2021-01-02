import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(response => response.data);
}

const create = newObject => {
    const response = axios.post(baseUrl, newObject);
    return response.then(response => response.data);
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject);
}

export default {getAll, create, update}