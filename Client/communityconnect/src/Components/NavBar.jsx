import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBuilding, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import NavBg from "../assets/Nav.webp";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const encryptedEmail = Cookies.get('encryptedEmail');
    if (encryptedEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    Cookies.remove('encryptedEmail');
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center sticky top-3 z-50">
      <div
        className="navbar bg-base-100 rounded-box mt-0"
        style={{
          width: "90vw",
          height: "60px",
          lineHeight: "60px",
          backgroundImage: `url(${NavBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 0 25px black",
        }}
      >
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a href="#footer">Contact</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#topvolunteers">Top Volunteers</a>
              </li>
            </ul>
          </div>
          <div className="lg:ml-12">
            <img
              className="sm:w-48 md:w-64 logo-image"
              src={logo}
              alt="Logo"
              width={"200px"}
              loading="lazy"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 bg-[#2b2c43] text-white">
                  <li>
                    <a href="#footer">Contact</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#topvolunteers">Top Volunteers</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:mr-20">
          <div>
            {isLoggedIn ? (
              <button
                className="btn bg-red-500 text-white mr-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn bg-red-500 text-white mr-4"
                onClick={handleModalOpen}
              >
                Sign Up
              </button>
            )}

            <AnimatePresence>
              {showModal && (
                <motion.div
                  className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Select Your Role</h2>
                      <button
                        className="text-red-500"
                        onClick={handleModalClose}
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>
                    <div className="flex justify-between space-x-4">
                      <Link to="/volunteersignup">
                        <motion.button
                          className="btn bg-blue-500 text-white flex items-center space-x-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaUser />
                          <span>Volunteer</span>
                        </motion.button>
                      </Link>
                      <Link to="/organizationsignup">
                        <motion.button
                          className="btn bg-green-500 text-white flex items-center space-x-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaBuilding />
                          <span>Organization</span>
                        </motion.button>
                      </Link>
                    </div>
                    <p className="text-sm mt-4">
                      Already have a Account ?{" "}
                      <Link to="/login" className="text-blue-500">
                        Login
                      </Link>
                    </p>
                    <motion.button
                      className="btn bg-red-500 text-white mt-4"
                      onClick={handleModalClose}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Close Modal
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
