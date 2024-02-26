import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:3001" });
Api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile"))?.token
    }`;
  }
  return req;
});

export const user_Login = (FormData) => Api.post("/user/login", FormData);
export const user_Signup = (FormData) => Api.post("/user/register", FormData);
export const user_Info = (id) => Api.get(`/user/profile/${id}`);
