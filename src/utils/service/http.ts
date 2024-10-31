import axios from "axios"
const baseURL = 'http://localhost:3000';
const http = axios.create({
    baseURL,
    timeout: 10000
})

export {http};