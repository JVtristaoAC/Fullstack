import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:28819/api/'
})