import axios from 'axios'

const baseURL = "http://localhost:8000/api";

const api = axios.create({
    baseURL: baseURL,
})

export default api

