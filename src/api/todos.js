import axios from "axios";
import { config } from "../config";

export const getTodos = () => {
    return axios.get(`${config.api_host}/todos`)
}