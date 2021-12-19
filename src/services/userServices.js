import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function createNewUser(data) {
  const response = await axios.post(`${apiUrl}/users/register`, data);
  return response;
}

export async function getAllUsers() {
  const token = localStorage.getItem("token");
  console.log(token);
  const allUsers = await axios.get(`${apiUrl}/users/allUsers`, {
    headers: { "X-Auth-Token": token },
  });
  return allUsers;
}

export async function deleteUser(data) {
  const token = localStorage.getItem("token");
  const deletedUser = await axios.delete(`${apiUrl}/users/deleteUser`, {
    headers: { "X-Auth-Token": token },
    data
  });
  return deletedUser;
}

export async function getOneUser(data) {
  const token = localStorage.getItem("token");
  const foundUser = await axios.post(`${apiUrl}/users/oneUser`, {
    headers: { "X-Auth-Token": token },
    cardID: data
  });
  return foundUser;
}
