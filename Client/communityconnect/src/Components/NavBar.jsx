import React from "react";
import logo from "../assets/logo.png";
import NavBg from "../assets/Nav.webp";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
      <div className="flex justify-center sticky top-3 z-50">
        <div className="navbar bg-base-100 rounded-box mt-0"  
        style={{
          width: "90vw",
          height: "60px", // Adjust the height as per your requirement
          lineHeight: "60px", // Center align the content vertically
          backgroundImage: `url(${NavBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: '0 0 25px black'
        }}  >
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><Link to= "/">Home</Link></li>
                <li>
                  <a>About</a>
                  <ul className="p-2">
                    <li><a href="#footer" >Contact</a></li>
                    <li><a href="#services" >Services</a></li>
                  </ul>
                </li>
                <li><a href="#topvolunteers" >Top Volunteers</a></li>
              </ul>
            </div>
            <div className="lg:ml-12" >
              <img
                className="sm:w-48 md:w-64"
                src={logo}
                alt="Logo"
                class="logo-image"
                width={"200px"}
                loading="lazy"
              />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg text-white">
              <li><Link to= "/">Home</Link></li>
              <li>
                <details>
                  <summary>About</summary>
                  <ul className="p-2 bg-[#2b2c43] text-white">
                    <li><a href="#footer">Contact</a></li>
                    <li><a href="#services" >Services</a></li>
                  </ul>
                </details>
              </li>
              <li><a href="#topvolunteers" >Top Volunteers</a></li>
            </ul>
          </div>
          <div className="navbar-end lg:mr-20">
            <Link to="/signup" className="btn bg-red-500 text-white">Sign Up</Link>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
