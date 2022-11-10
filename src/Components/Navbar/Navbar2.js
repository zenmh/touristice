import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar2 = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="flex justify-between items-center my-2">
      <div className="flex items-center">
        <img className="w-10 h-10" src={Logo} alt="" />
        <h2 className="ml-2 font-bold text-2xl">Touristics</h2>
      </div>
      <div className="flex items-center gap-4">
        <NavLink className="text-gray-500 hover:text-black font-bold" to="/">
          Home
        </NavLink>
        <NavLink
          className="text-gray-500 hover:text-black font-bold"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className="text-gray-500 hover:text-black font-bold"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className="text-gray-500 hover:text-black font-bold"
          to="/addservice"
        >
          Add Service
        </NavLink>
        <NavLink
          className="text-gray-500 hover:text-black font-bold"
          to="/myreviews"
        >
          My Reviews
        </NavLink>
        {user ? (
          <NavLink
            className="text-gray-500 hover:text-black font-bold"
            onClick={logout}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            className="text-gray-500 hover:text-black font-bold"
            to="/login"
          >
            Login
          </NavLink>
        )}
        {user ? (
          <img
            title={user?.displayName}
            className="w-8 h-8 rounded-full"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
