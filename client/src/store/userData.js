export const User = (state = { userData: null, error: null }, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, userData: action.payload };
    case "CLEARUSER":
      return { ...state, userData: null }
    case "USERERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
