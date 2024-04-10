import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Edit, Delete } from '@mui/icons-material';
import Volunteer from "../assets/VolunteerProfilePic.png"

const VolunteerNavBar = () => {


  return (
    <div className="navbar bg-[#2B2D42] py-4 px-12">
      <div className="navbar-start flex items-center">
        <button className="btn btn-ghost text-white">
          <ChevronLeft />
        </button>
        <img src={Volunteer} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
        <span className="text-white">Nivaash</span>
      </div>

      {/* Edit and delete buttons */}
      <div className="navbar-end">
        <div className="flex items-center space-x-4">
          <button className="btn bg-success w-16 md:w-32 text-white text-lg">
            <Edit />
            <p className="hidden md:block">Edit</p>
          </button>
          <button className="btn bg-rose-600 w-16 md:w-32 text-white text-lg">
            <Delete />
            <p className="hidden md:block">Delete</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNavBar;