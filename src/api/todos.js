import axios from "axios";
import { config } from "../config";

export const getTodos = () => {
    const response =  axios.get(`${config.api_host}/todos`)

    return response
}