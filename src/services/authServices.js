import axios from "axios";
import jwtDecode from "jwt-decode";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function login(data) {

    const response = await axios.post(`${apiUrl}/users/login`, data);
    localStorage.setItem("token", response.data.token);
    return response;
}

export function getCurrentUser() {
    return jwtDecode(localStorage.getItem("token"));
}

export function logout() {
  localStorage.removeItem("token");
  window.location = "/";
}
