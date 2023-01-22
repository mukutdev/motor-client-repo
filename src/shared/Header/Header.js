import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/AuthConText";

const Header = () => {
  const { user, handleUserLogout } = useContext(AuthProvider);

  const menuItems = (
    <>
      <li>
        <Link
          className="text-lg mx-2 rounded-lg font-medium  hover:bg-yellow-400 hover:text-white"
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-lg  mx-2 rounded-lg font-medium  hover:bg-yellow-400 hover:text-white"
          to={"/blogs"}
        >
          Blogs
        </Link>
      </li>
     {
       user?.uid ? <>
       <li><Link to={'/dashboard'} className="text-lg mx-2 rounded-lg hover:text-white hover:bg-yellow-500 font-medium">Dashboard</Link></li>
        <li><Link className="text-lg mx-2 rounded-lg font-medium">Hello, {user?.displayName}</Link></li>
         <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black border-0" onClick={()=> handleUserLogout()}>Logout</button> 
       </> :  <li>
       <Link
         className="text-lg mx-2 rounded-lg font-medium  hover:bg-yellow-400 hover:text-white"
         to={"/login"}
       >
         Login
       </Link>
     </li>
     }
    </>
  );
  return (
    <div className="navbar  container mx-auto bg-base-100 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 mx-4 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold ">
          <img
            src="https://i.ibb.co/Vpp9J31/logo-auto-parts.png"
            className="h-7"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label  htmlFor="dashboardDrawer" tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
    </div>
  );
};

export default Header;
