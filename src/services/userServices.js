import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export function register(data) {
    return axios.post(`${apiUrl}/users/register`, data);
}

export async function getAllUsers() {
    const token = localStorage.getItem('token');
    console.log(token);
    const allUsers = await axios.get(`${apiUrl}/users/allUsers`, {headers: {"X-Auth-Token": token}});
    return allUsers;
}