export const Authorization = (
  state = { authData: null, error: null },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...state, authData: action.payload };
    case "LOGOUT":
      localStorage.removeItem("profile");
      return { ...state, authData: null };
    case "USERAUTHERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
