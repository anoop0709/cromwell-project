import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../actions/apiActions';

export const Protected = () => {
    const dispatch = useDispatch();
    const userToken = JSON.parse(localStorage.getItem('profile'))?.token;
    const userId = JSON.parse(localStorage.getItem("profile"))?.userData?._id;
    const userDetails = useSelector((state) => state?.User?.userData?.userObj);
    useEffect(() => {
        if (!userDetails) dispatch(userProfile(userId));
      }, []);
    return userToken ? <Outlet/> : <Navigate to="/user/login"/>
}