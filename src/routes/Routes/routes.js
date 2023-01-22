import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import ReportedItems from "../../pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import DashboardLayout from "../../shared/DashboardLayout/DashboardLayout";
import ErrorPage from "../../shared/ErrorPage/ErrorPage";
import Main from "../../shared/Main/Main";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blog/>  
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><Category/></PrivateRoute>
            },
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element : <AdminRoute><Dashboard/></AdminRoute>
            },
            {
                path:'/dashboard/myorders',
                element : <AdminRoute><MyOrders/></AdminRoute>
            },
            {
                path:'/dashboard/allsellers',
                element : <AdminRoute><AllSellers/></AdminRoute>
            },
            {
                path:'/dashboard/allbuyers',
                element : <AdminRoute><AllBuyers/></AdminRoute>
            },
            {
                path:'/dashboard/addproduct',
                element : <AdminRoute><AddProduct/></AdminRoute>
            },
            {
                path:'/dashboard/myproducts',
                element : <AdminRoute><MyProduct/></AdminRoute>
            },
            {
                path:'/dashboard/report',
                element : <AdminRoute><ReportedItems/></AdminRoute>
            },
        ]
    },
    
])