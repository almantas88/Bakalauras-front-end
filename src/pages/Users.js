import React, { useState } from "react";
import MenuDrawer from "../components/menuDrawer";
import { Button } from "@mui/material";
import TableUsers from "../components/tableUsers";
import AddUserForm from "../components/myAddUserForm";
import InfoUserBox from '../components/infoUser';
import UserTable from '../components/userTable';

export default function Users() {
    const [showNewUserForm, setshowNewUserForm] = useState(false);
    const [showUserInfo, setshowUserInfo] = useState(false);
    const [userInfo, setUserInfo] = useState({
      id: "",
      firstName: "",
      lastName: ""
    })
  
    const handleShowUserAddForm = () => {
      showNewUserForm ? setshowNewUserForm(false) : setshowNewUserForm(true);
    };

    const handleShowUserInfo = (row) => {
      setUserInfo({
        cardID: row.cardID,
      firstName: row.firstName,
      lastName: row.lastName
      });
      console.log(userInfo);
      showUserInfo ? setshowUserInfo(false) : setshowUserInfo(true);
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
        <TableUsers handleShowUserInfo={handleShowUserInfo}></TableUsers>
        {showNewUserForm ? <AddUserForm handleChange={handleShowUserAddForm}/> : null}
        {showUserInfo ? <InfoUserBox userInfo={userInfo} handleChange={handleShowUserInfo}/> : null}
      </div>
    );
  }

  