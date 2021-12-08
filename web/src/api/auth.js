import axios from "./index";

const baseAuthURL = '/users/auth'

export function login({username, password}) {
    const bodyFormData = new FormData();

    bodyFormData.append('username', username)
    bodyFormData.append('password', password)

    return axios.post(`${baseAuthURL}/login`, bodyFormData)
}

export function register(userData) {
    return axios.post(`${baseAuthURL}/register`, userData)
}

export function logout() {
    return axios.post(`${baseAuthURL}/logout`)
}