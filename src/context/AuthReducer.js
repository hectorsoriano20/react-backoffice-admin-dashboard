const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      sessionStorage.removeItem("user");
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
