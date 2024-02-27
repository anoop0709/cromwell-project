import * as api from "../api/userApi";

export const logIn = (formData, Navigate) => async (dispatch) => {
  try {
    const { data } = await api.user_Login(formData);
    if (data) {
      dispatch({ type: "LOGIN", payload: data });
      Navigate("/");
    }
  } catch (error) {
    dispatch({ type: "USERAUTHERROR", payload: error?.response.data });
  }
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    const { data } = await api.user_Signup(formData);
    if (data) {
      dispatch({ type: "REGISTERSUCCESS", payload: data?.message });
    }
  } catch (error) {
    dispatch({ type: "REGISTERERROR", payload: error?.response.data });
  }
};

export const userProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.user_Info(id);
    if (data) {
      dispatch({ type: "USER", payload: data });
    }
  } catch (error) {
    dispatch({ type: "USERERROR", payload: error?.response.data });
  }
};
