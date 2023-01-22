import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthConText';
import { useAdmin } from '../../Hooks/useAdmin';
import Loader from '../../shared/Loader/Loader';

const AdminRoute = ({children}) => {

    const {user , loading} = useContext(AuthProvider)
    const [userLevel , isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()

    if(loading || isAdminLoading){
        return <Loader/>
    }
   if(user && userLevel){
     return children;
   }

    return <Navigate to={'/login'} state={{from : location}}></Navigate>;
};

export default AdminRoute;