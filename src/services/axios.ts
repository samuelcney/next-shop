import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://fakestoreapi.in/api/',
    timeout: 3000
})