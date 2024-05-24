import React from 'react';
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const PostNavbar = () => {
    return (
        <div className="navbar mt-0 px-4 sm:px-10 bg-[#2b2c43]"  
            style={{
                width: "100%",
                height: "80px",
                lineHeight: "80px", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: '0 0 25px black',
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center" 
            }}  
        >
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2b2c43] text-white rounded-box w-52">
                        <li><Link to="/" >Homepage</Link></li>
                    </ul>
                </div>
                <div className="lg:ml-8">
                    <img
                        className="sm:w-48 md:w-64"
                        src={logo}
                        alt="Logo"
                        width={"220px"}
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="navbar-center flex-grow">
                <label className="input input-bordered flex items-center gap-2 bg-white text-black w-full sm:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                        <input type="text" className="grow" placeholder="Search Posts" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 cursor-pointer">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                </label>
            </div>
            <div className="navbar-end lg:space-x-8">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <div className="dropdown dropdown-end flex">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring ring-[#ffc200]">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2b2c43] text-white rounded-box w-52">
                        <li>
                            <Link to="/volunteerprofile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PostNavbar;
