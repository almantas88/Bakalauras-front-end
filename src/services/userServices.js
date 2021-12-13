import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export async function createNewUser(data) {

    const response = await axios.post(`${apiUrl}/users/register`, data);
    return response;
}

export async function getAllUsers() {
    const token = localStorage.getItem('token');
    console.log(token);
    const allUsers = await axios.get(`${apiUrl}/users/allUsers`, {headers: {"X-Auth-Token": token}});
    return allUsers;
}