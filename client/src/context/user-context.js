import { createContext, useState } from "react";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
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
      setState({ user, token });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post("/auth/login", currentUser);
      console.log(response.data);
      const { user, token } = response.data;
      setState({ user, token });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
