import { Navigate, Outlet } from 'react-router-dom';

export const Protected = () => {

    const userToken = JSON.parse(localStorage.getItem('user'))?.Token ;
    return userToken ? <Outlet/> : <Navigate to="/user/login"/>
}