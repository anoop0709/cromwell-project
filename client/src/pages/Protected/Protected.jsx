import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../actions/apiActions';
import { fetchToken } from '../../utils/fetchToken';

export const Protected = () => {
    const dispatch = useDispatch();
    const { userToken, userId } = fetchToken();
    const userDetails = useSelector((state) => state?.User?.userData?.userObj);
    useEffect(() => {
      if (userToken && userId) {
        if (!userDetails) dispatch(userProfile(userId));
      }
      }, []);
    return userToken ? <Outlet/> : <Navigate to="/user/login"/>
}