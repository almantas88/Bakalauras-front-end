import "./App.css";
import React, { useState } from "react";
import MenuDrawer from "./components/menuDrawer";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TableUsers from "./components/tableUsers";
import { Button } from "@mui/material";
import AddUserForm from "./components/addUserForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <MenuDrawer />
      <h2>Namų puslapis</h2>
    </div>
  );
}

function Books() {
  return (
    <div>
      <MenuDrawer />
      <h2>Knygos</h2>
    </div>
  );
}

function Users() {
  const [addUserBox, setAddUserBox] = useState(false);

  const handleAddUserBox = () => {
    addUserBox ? setAddUserBox(false) : setAddUserBox(true);
  };

  return (
    <div>
      <MenuDrawer />
      <h2>Vartotojai</h2>
      <Button
        onClick={handleAddUserBox}
        className="addUser-btn"
        variant="contained"
      >
        Pridėti vartotoją
      </Button>
      <TableUsers></TableUsers>
      {addUserBox ? <AddUserForm handleChange={handleAddUserBox} ></AddUserForm> : null}
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <MenuDrawer />
      <h2>Nerasta</h2>
    </div>
  );
}
