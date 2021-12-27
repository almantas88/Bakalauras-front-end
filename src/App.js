import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import MenuDrawer from "./components/menuDrawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Users from "./pages/Users";
import Books from "./pages/Books";
import FlashMessage from "./components/flashMessage";
import { MessageProvider, MessageContext } from "./context/messageContext";

export default function App() {
  const [
    error,
    setError,
    showError,
    setShowError,
    severity,
    setSeverity,
    closeError,
  ] = useContext(MessageContext);

  return (

     
      <Router>
         <FlashMessage
        msg={error}
        showError={showError}
        closeError={closeError}
        severity={severity}
      />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/users" element={<Users />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

  );
}



function NotFound() {
  return (
    <div>
      <h2>404 klaida</h2>
    </div>
  );
}
