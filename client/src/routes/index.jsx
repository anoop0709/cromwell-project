import  { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Error } from '../pages/Error/Error';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Signin/Register';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: '/user/login',
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: '/user/register',
        element: <Register />,
        errorElement: <Error />
    }
]);