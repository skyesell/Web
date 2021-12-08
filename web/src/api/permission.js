import axios from "./index";
import {returnData} from "./utils";

const baseAuthURL = '/users/permissions'

export function getMe() {
    return axios.get(`${baseAuthURL}/me`)
        .then(returnData)
}

export function changeUserName(username) {
    return axios.put(`${baseAuthURL}/set_name/`, {name: username})
        .then(returnData)
}