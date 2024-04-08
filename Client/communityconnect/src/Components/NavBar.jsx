import React from "react";
import logo from "../assets/logo.png";
import NavBg from "../assets/Nav.webp";
import { Link } from "react-router-dom"; 

const NavBar = () => {
  const navbarStyle = {
    backgroundImage: `url(${NavBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="navbar bg-base-100 py-4 px-12" style={navbarStyle}>
      <div className="navbar-start ">
        <div className="dropdown text-white ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2b2c43] rounded-box w-52">
            <li><a className="text-white">Home</a></li>
            <li>
              <a className="text-white">About</a>
              <ul className="p-2">
                <li><a className="text-sm text-white">Contact</a></li>
                <li><a className="text-sm text-white ">Services</a></li>
              </ul>
            </li>
            <li><a className="text-white">Top Volunteers</a></li>
          </ul>
        </div>
        <Link to="/" >
          <img src={logo} alt="" className="w-40 h-auto md:w-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-xl text-white">Home</a></li>
          <li>
            <details>
              <summary className="text-xl text-white">About</summary>
              <ul className="p-2 bg-[#2b2c43] ">
                <li><a className="text-lg text-white">Contact</a></li>
                <li><a className="text-lg  text-white">Services</a></li>
              </ul>
            </details>
          </li>
          <li><a className="text-xl text-white">Top Volunteers</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/signup" >
          <p className="btn bg-rose-600 w-22 md:w-32 mr-2 text-white text-lg">SignUp</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
