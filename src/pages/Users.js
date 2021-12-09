import React, { useState, useEffect } from "react";
import MenuDrawer from "../components/menuDrawer";
import { Button } from "@mui/material";
import TableUsers from "../components/tableUsers";
import AddUserForm from "../components/myAddUserForm";
import { getCurrentUser } from "../services/authServices";
import { getAllUsers } from "../services/userServices";

export default function Users() {
  const [user, setUser] = useState("");
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    returnAllUsers();
    getRole();
  }, []);

  async function getRole() {
    try {
      const user = await getCurrentUser();
      //console.log(user);
      if (!user) window.location = "/unauthorized";
      if (user.role !== "ADMIN") {
        //console.log(user.role);
        window.location = "/student";
      } else {
        setUser(user);
      }
    } catch (error) {
      window.location = "/unauthorized";
    }
  }

  async function returnAllUsers() {
    try {
      const { data } = await getAllUsers();
      //console.log(data.users);
      setUsersList(data.users);
      //console.log(usersList);
    } catch (error) {
      console.log(error);
    }
  }

  const [showNewUserForm, setshowNewUserForm] = useState(false);

  const handleShowUserAddForm = () => {
    showNewUserForm ? setshowNewUserForm(false) : setshowNewUserForm(true);
  };

  return (
    <div>
      <MenuDrawer />
      <h2>Vartotojai</h2>
      <Button
        onClick={handleShowUserAddForm}
        className="addUser-btn"
        variant="contained"
      >
        Pridėti vartotoją
      </Button>
      <TableUsers usersList={usersList}></TableUsers>
      {showNewUserForm ? (
        <AddUserForm handleChange={handleShowUserAddForm} />
      ) : null}
    </div>
  );
}
