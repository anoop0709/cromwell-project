export const Registration = (
    state = { successMessage: null, error: null },
    action
  ) => {
    switch (action.type) {
      case "REGISTERSUCCESS":
        return { ...state, successMessage: action.payload };
      case "REGISTERERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };