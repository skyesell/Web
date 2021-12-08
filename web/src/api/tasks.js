import axios from "./index";
import {returnData} from "./utils";

const baseUrl = "/tasks"

export function getStatistic() {
    return axios.get(`${baseUrl}/statistic/`)
        .then(returnData)
}

export function getTaskList() {
    return axios.get(`${baseUrl}/task/`)
        .then(returnData)
}

export function createTask(text) {
    return axios.post(`${baseUrl}/task/`, {text})
        .then(returnData)
}

export function checkTask(taskId) {
    return axios.put(`${baseUrl}/task/${taskId}`)
        .then(returnData)
}

export function deleteTask(taskId) {
    return axios.delete(`${baseUrl}/task/${taskId}`)
        .then(returnData)
}