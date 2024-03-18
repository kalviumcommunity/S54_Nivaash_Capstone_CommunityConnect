import React from "react";
import logo from "../assets/logo.png";
import NavBg from "../assets/Nav.webp"; // Assuming the correct file extension is '.webp'

const NavBar = () => {
  const navbarStyle = {
    backgroundImage: `url(${NavBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="navbar bg-base-100 p-6" style={navbarStyle}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className="text-base">Home</a></li>
            <li>
              <a className="text-base">About</a>
              <ul className="p-2">
                <li><a className="text-sm">Contact</a></li>
                <li><a className="text-sm">Services</a></li>
              </ul>
            </li>
            <li><a className="text-base">Top Volunteers</a></li>
          </ul>
        </div>
        <img src={logo} alt="" className="w-40 h-auto md:w-auto" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-xl">Home</a></li>
          <li>
            <details>
              <summary className="text-xl">About</summary>
              <ul className="p-2">
                <li><a className="text-lg">Contact</a></li>
                <li><a className="text-lg">Services</a></li>
              </ul>
            </details>
          </li>
          <li><a className="text-xl">Top Volunteers</a></li>
        </ul>
      </div>
      <div className="navbar-end"
        <a href="#" className="btn bg-rose-600 w-22 md:w-32 mr-2 text-white text-lg">Login</a>
      </div>
    </div>
  );
};

export default NavBar;
