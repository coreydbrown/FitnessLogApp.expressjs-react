const reducer = (state, action) => {
  switch (action.type) {
    case "register_success":
      return {
        user: action.payload.user,
        token: action.payload.token,
        emailAlreadyRegistered: false,
        invalidCredentials: false,
      };
    case "login_success":
      return {
        user: action.payload.user,
        token: action.payload.token,
        emailAlreadyRegistered: false,
        invalidCredentials: false,
      };
    case "logout":
      return {
        user: null,
        token: null,
        emailAlreadyRegistered: false,
        invalidCredentials: false,
      };
    case "email_already_exists":
      return {
        ...state,
        emailAlreadyRegistered: true,
      };
    case "invalid_credentials":
      return {
        ...state,
        invalidCredentials: true,
      };
    default:
      return state;
  }
};

export default reducer;
