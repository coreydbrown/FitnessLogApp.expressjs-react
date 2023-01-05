import { createContext, useReducer } from "react";
import reducer from "./user-reducer";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  emailAlreadyRegistered: false,
  invalidCredentials: false,
};

export const UserContext = createContext(initialState);

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (newUser) => {
    try {
      const response = await axios.post("/auth/register", newUser);
      console.log(response.data);
      const { user, token } = response.data;
      dispatch({ type: "register_success", payload: { user, token } });
      addUserToLocalStorage({ user, token });
      return true;
    } catch (error) {
      console.log(error.response.data.msg);
      if (error.response.data.msg === "Email already exists") {
        dispatch({ type: "email_already_exists" });
      }
      return false;
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post("/auth/login", currentUser);
      console.log(response.data);
      const { user, token } = response.data;
      dispatch({ type: "login_success", payload: { user, token } });
      addUserToLocalStorage({ user, token });
      return true;
    } catch (error) {
      console.log(error.response.data.msg);
      if (error.response.data.msg === "Invalid credentials") {
        dispatch({ type: "invalid_credentials" });
      }
      return false;
    }
  };

  const logoutUser = () => {
    dispatch({ type: "logout" });
    removeUserFromLocalStorage();
  };

  return (
    <UserContext.Provider
      value={{ ...state, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
