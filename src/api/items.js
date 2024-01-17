import axios from "axios";
import { config } from "../config";

export const postItems = (payload) => {
    return axios.post(`${config.api_host}/items`, payload)
}

export const getOneItems = (id) => {
    return axios.get(`${config.api_host}/items/${id}`)
}

export const updateItems = (id, payload) => {
    return axios.put(`${config.api_host}/items/${id}`, payload)
}

export const deleteItems = (id) => {
    return axios.delete(`${config.api_host}/items/${id}`)
}

export const moveItems = (id, payload) => {
    return axios.put(`${config.api_host}/items/${id}/move`, payload)
}