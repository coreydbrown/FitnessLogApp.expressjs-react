import { createContext, useState } from "react";

const initialState = {
  user: null,
  token: null,
};

export const UserContext = createContext(initialState);

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const registerUser = (user) => {
    console.log(user);
  };

  return (
    <UserContext.Provider value={{ ...state, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
