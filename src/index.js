import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MessageProvider } from "./context/messageContext";

ReactDOM.render(
  <React.StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
