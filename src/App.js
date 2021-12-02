import "./App.css";
import React from "react";
import MenuDrawer from "./components/menuDrawer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/users" element={<Users />} />
      <Route path="/books" element={<Books />} />
      <Route path= "*" element={<NotFound />}/>

    </Routes>
  </Router>
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

function NotFound() {
  return (
    <div>
      <h2>404 klaida</h2>
    </div>
  );
}
