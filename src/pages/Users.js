import React, { useState, useEffect } from "react";
import MenuDrawer from "../components/menuDrawer";
import { Button } from "@mui/material";
import UsersSearch from "../components/users/usersSearch";
import AddUserForm from "../components/users/addUserForm";
import { getCurrentUser } from "../services/authServices";
import { getAllUsers } from "../services/userServices";

export default function Users() {
  const [user, setUser] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    returnAllUsers();
    getRole();
  }, []);

  async function getRole() {
    try {
      const user = await getCurrentUser();
      if (!user) window.location = "/unauthorized";
      if (user.role !== "ADMIN") {
        window.location = "/student";
      } else {
        setUser(user);
      }
    } catch (error) {
      window.location = "/unauthorized";
    }
  }

  async function returnAllUsers() {
    setIsLoading(true);
    try {
      const { data } = await getAllUsers();
      setUsersList(data.users);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
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
      <UsersSearch usersList={usersList} isLoading={isLoading}></UsersSearch>
      {showNewUserForm ? (
        <AddUserForm handleChange={handleShowUserAddForm} setUsersList={setUsersList} usersList={usersList} />
      ) : null}
    </div>
  );
}
