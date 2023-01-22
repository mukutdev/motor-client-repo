import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthConText';
import Loader from '../../shared/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthProvider)
    const location = useLocation()

    if(loading){
        return <Loader></Loader>
    }
   if(user){
     return children;
   }

    return <Navigate to={'/login'} state={{from : location}}></Navigate>;
};

export default PrivateRoute;