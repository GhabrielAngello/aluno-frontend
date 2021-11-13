import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://cdaluno-backend.herokuapp.com'
})
 
export default api;