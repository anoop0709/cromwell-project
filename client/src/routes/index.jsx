import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Error } from "../pages/Error/Error";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Signin/Register";
import { Profile } from "../pages/Profile/Profile";
import { Protected } from "../pages/Protected/Protected"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/register",
    element: <Register />,
  },
  {
    element: <Protected />,
    children: [
      {
        path: "/user/profile",
        element: <Profile />
      }
    ]
  }
]);
