import axios from "axios";
import { config } from "../config";

export const getTodos = () => {
    return axios.get(`${config.api_host}/todos`)
}

export const postTodos = (payload) => {
    return axios.post(`${config.api_host}/todos`, payload)
}

export const getOneTodos = (id) => {
    return axios.get(`${config.api_host}/todos/${id}`)
}

export const updateTodos = (id, payload) => {
    return axios.put(`${config.api_host}/todos/${id}`, payload)
}
export const deleteTodos = (id) => {
    return axios.delete(`${config.api_host}/todos/${id}`)
}