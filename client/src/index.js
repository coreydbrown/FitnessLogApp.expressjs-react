import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "normalize.css";
import "./assets/global.css";
import App from "./App";
import ThemeContext from "./context/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContext>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContext>
  </React.StrictMode>
);
