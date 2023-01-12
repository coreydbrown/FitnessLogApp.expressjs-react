import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
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
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeContext>
    </UserContextProvider>
  </React.StrictMode>
);
