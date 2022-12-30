import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import ThemeContext from "./context/theme-context";
import UserContextProvider from "./context/user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeContext>
        <App />
      </ThemeContext>
    </UserContextProvider>
  </React.StrictMode>
);
