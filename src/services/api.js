<<<<<<< HEAD
import axios from 'axios'

const api  = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api
=======
import axios from 'axios';

const api = axios.create({
    
    baseURL: process.env.REACT_APP_API_URL

})

export default api;

>>>>>>> 36cb93137cf9c054ea7d1aea7fbd876c3a4d5bb7
