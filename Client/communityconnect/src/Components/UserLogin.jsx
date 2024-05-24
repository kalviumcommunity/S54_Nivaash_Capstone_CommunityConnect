import { useState } from "react";
import KeyTwoToneIcon from "@mui/icons-material/KeyTwoTone";
import { EmailOutlined } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const volunteers = await axios.get(
        "https://communityserver.vercel.app/volunteers"
      );
      const volunteerData = volunteers.data;

      const Organizations = await axios.get(
        "https://communityserver.vercel.app/organisations"
      );

      const OrganizationData = Organizations.data;

      const volunteer = volunteerData.find(
        (user) =>
          user.email === formData.email && user.Password === formData.Password
      );

      const Organization = OrganizationData.find(
        (user) =>
          user.email === formData.email && user.Password === formData.Password
      );

      if (volunteer) {
        const secretKey = import.meta.env.VITE_EMAIL_SECRET_KEY;

        const encryptedEmail = CryptoJS.AES.encrypt(
          formData.email,
          secretKey
        ).toString();

        Cookies.set("encryptedEmail", encryptedEmail, { expires: 7 });

        navigate("/volunteerprofile");
      }

      if (Organization) {
        const secretKey = import.meta.env.VITE_EMAIL_SECRET_KEY;

        const encryptedEmail = CryptoJS.AES.encrypt(
          formData.email,
          secretKey
        ).toString();

        Cookies.set("encryptedEmail", encryptedEmail, { expires: 7 });
        navigate("/organizationprofile");
      } else {
        toast.error("Invalid email or Password");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("An error occurred while logging in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <ToastContainer />
      <div
        style={{ width: "60vw", height: "70vh" }}
        className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center md:space-x-8 "
      >
        <div className="flex justify-center mb-6 md:mb-0 w-1/2">
          <img
            src="https://templates.envytheme.com/olaf-admin/assets/img/computer.png"
            alt="Login Illustration"
            className="brightness-95"
          />
        </div>
        <div className="max-w-xs w-9/12">
          <h2 className="text-2xl font-semibold mb-10 text-center text-black">
            Login Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="mb-4">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                  <EmailOutlined />
                </span>
                <input
                  className="w-full py-2 pl-10 pr-3 border border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black indent-2"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="sr-only" htmlFor="Password">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                  <KeyTwoToneIcon />
                </span>
                <input
                  className="w-full py-2 pl-10 pr-3 border border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black indent-2"
                  onChange={handleChange}
                  name="Password"
                  type="password"
                  id="Password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
