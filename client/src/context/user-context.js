import { createContext, useState } from "react";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  emailAlreadyRegistered: null,
  invalidCredentials: null,
};

export const UserContext = createContext(initialState);

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (newUser) => {
    try {
      const response = await axios.post("/auth/register", newUser);
      console.log(response.data);
      const { user, token } = response.data;
      setState({
        user,
        token,
        emailAlreadyRegistered: false,
        invalidCredentials: false,
      });
      addUserToLocalStorage({ user, token });
      return true;
    } catch (error) {
      console.log(error.response.data.msg);
      if (error.response.data.msg === "Email already exists") {
        setState({
          user: null,
          token: null,
          emailAlreadyRegistered: true,
          invalidCredentials: false,
        });
      }
      return false;
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post("/auth/login", currentUser);
      console.log(response.data);
      const { user, token } = response.data;
      setState({
        user,
        token,
        emailAlreadyRegistered: false,
        invalidCredentials: false,
      });
      addUserToLocalStorage({ user, token });
      return true;
    } catch (error) {
      console.log(error.response.data.msg);
      if (error.response.data.msg === "Invalid credentials") {
        setState({
          user,
          token,
          emailAlreadyRegistered: false,
          invalidCredentials: true,
        });
      }
      return false;
    }
  };

  const logoutUser = () => {
    setState({ user: null, token: null });
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
