import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HomeIcon from "@mui/icons-material/Home";
import Organization from "../Assets/VolunteerProfilePic.png";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import CryptoJS from "crypto-js";
import EventModal from "./OrganizationSignUp/EventModal.jsx";
import AwardModal from "./OrganizationSignUp/AwardModal.jsx";

const OrganizationProfile = () => {
  const [organizationData, setOrganizationData] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const decryptEmail = () => {
      try {
        const encryptedEmail = Cookies.get("encryptedEmail");
        if (encryptedEmail) {
          const secretKey = import.meta.env.VITE_EMAIL_SECRET_KEY;
          const bytes = CryptoJS.AES.decrypt(encryptedEmail, secretKey);
          const decryptedEmail = bytes.toString(CryptoJS.enc.Utf8);
          return decryptedEmail;
        } else {
          console.error("Encrypted email not found in cookie");
          return null;
        }
      } catch (error) {
        console.error("Error decrypting email:", error);
        return null;
      }
    };

    const userEmail = decryptEmail();
    if (userEmail) {
      fetchOrganizationData(userEmail);
    } else {
      console.error("Failed to decrypt email");
    }
  }, [navigate]);

  const fetchOrganizationData = async (userEmail) => {
    try {
      const response = await axios.get(
        `https://communityserver.vercel.app/organisations/email/${userEmail}`
      );
      if (response.status === 200) {
        setOrganizationData(response.data);
      } else {
        console.error(
          "Failed to fetch organization data, status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching organization data:", error);
    }
  };

  const handleAddEvent = async (event) => {
    try {
      const response = await axios.put(
        `https://communityserver.vercel.app/organisations/email/${organizationData.email}/events`,
        event
      );
      if (response.status === 200) {
        setOrganizationData((prevData) => ({
          ...prevData,
          successfulEvents: [...prevData.successfulEvents, event],
        }));
        setIsEventModalOpen(false);
      } else {
        console.error("Failed to add event, status:", response.status);
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleAddAward = async (award) => {
    try {
      const response = await axios.put(
        `https://communityserver.vercel.app/organisations/email/${organizationData.email}/awards`,
        award
      );
      if (response.status === 200) {
        setOrganizationData((prevData) => ({
          ...prevData,
          awards: [...prevData.awards, award],
        }));
        setIsAwardModalOpen(false);
      } else {
        console.error("Failed to add award, status:", response.status);
      }
    } catch (error) {
      console.error("Error adding award:", error);
    }
  };

  if (!organizationData) {
    return <div>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        className="organization-profile h-full flex flex-col items-center bg-white py-4 px-4 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col px-28 mt-5 md:mt-0 md:flex-row items-center justify-between w-full">
          <div data-aos="fade-right">
            <img
              className="w-40 md:w-48"
              src={Organization}
              alt={organizationData.organizationName}
            />
          </div>
          <div
            className="flex flex-col justify-between h-24 md:h-28 mt-4 md:mt-0"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-evenly">
              <p className="text-4xl md:text-5xl text-green-500">
                {organizationData.posts}
              </p>
              <div
                className="text-green-500 flex flex-col justify-center items-center"
                style={{ width: "3rem", height: "3rem", fontSize: "1.5rem" }}
              >
                <EventAvailableIcon style={{ width: "80%", height: "80%" }} />
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-black">Posts</p>
            </div>
          </div>
          <div
            className="flex flex-col justify-between h-20 md:h-24 mt-4 md:mt-0"
            data-aos="fade-left"
          >
            <div className="w-36 md:w-44 px-6 md:px-8 flex items-center justify-evenly">
              <p className="text-4xl md:text-5xl text-orange-400">
                {organizationData.followers}
              </p>
              <div className="rating rating-lg">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-black">Followers</p>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-0 justify-items-center"
          data-aos="fade-up"
        >
          <motion.div
            className="flex flex-col items-center justify-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#a3b2cc]"
              style={{ position: "relative", top: "35px", marginTop: "-20px" }}
            >
              <HomeIcon style={{ fontSize: "1.75rem", color: "black" }} />
            </div>
            <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] bg-[#3a3d5b] rounded-3xl overflow-hidden shadow-lg">
              <div
                style={{ color: "rgba(254,254,254,0.9)", maxHeight: "200px" }}
                className="px-4 md:px-6 py-6 md:py-8 space-y-3 mt-2 text-start"
              >
                <p>
                  Organization :{" "}
                  <span className="font-medium text-white">
                    {organizationData.organizationName}
                  </span>
                </p>
                <p>
                  Email :{" "}
                  <span className="font-medium text-white">
                    {organizationData.email}
                  </span>
                </p>
                <p>
                  Contact No :{" "}
                  <span className="font-medium text-white">
                    {organizationData.contactNo}
                  </span>
                </p>
                <p>
                  Address :{" "}
                  <span className="font-medium text-white">
                    {organizationData.address}
                  </span>
                </p>
                <p>
                  Establishment Year :{" "}
                  <span className="font-medium text-white">
                    {organizationData.establishmentYear}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            style={{ marginTop: "-20px" }}
            className="flex flex-col items-center justify-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#3a3d5b]"
              style={{ position: "relative", top: "35px" }}
            >
              <EventAvailableIcon
                style={{ fontSize: "1.75rem", color: "white" }}
              />
            </div>
            <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] text-black bg-[#a3b2cc] rounded-3xl overflow-hidden shadow-lg">
              <div
                className="px-4 md:px-6 py-6 space-y-2 md:py-8 text-start"
                style={{ maxHeight: "200px" }}
              >
                {organizationData.successfulEvents.map((event, index) => (
                  <div key={index}>
                    <li>{event.eventName}</li>
                    <p
                      style={{ color: "rgb(47,47,46)" }}
                      className="pl-7 text-sm"
                    >
                      {event.eventPlace}
                    </p>
                  </div>
                ))}
                <div className="text-center mt-2">
                  <button
                    onClick={() => setIsEventModalOpen(true)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
                  >
                    + Add Event
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            style={{ marginTop: "-20px" }}
            className="flex flex-col items-center justify-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#a3b2cc]"
              style={{ position: "relative", top: "35px" }}
            >
              <EmojiEventsIcon
                style={{ fontSize: "1.75rem", color: "black" }}
              />
            </div>
            <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] bg-[#3a3d5b] rounded-3xl overflow-hidden shadow-lg">
              <div
                className="px-4 md:px-6 py-8 space-y-4 md:py-8 text-white text-start overflow-y-auto"
                style={{ maxHeight: "225px", width: "300px" }}
              >
                {organizationData.awards.map((award, index) => (
                  <div key={index}>
                    <p
                      className="pl-7 pb-2 "
                      style={{ color: "rgba(254,254,254,0.9" }}
                    >
                      {award.awardName}
                    </p>
                    <p
                      style={{ color: "rgba(254,254,254,0.5" }}
                      className="pl-7 text-sm "
                    >
                      {award.awardDescription}
                    </p>
                  </div>
                ))}
                <div className="text-center mt-2">
                  <button
                    onClick={() => setIsAwardModalOpen(true)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
                  >
                    + Add Award
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <EventModal
        isOpen={isEventModalOpen}
        onRequestClose={() => setIsEventModalOpen(false)}
        onSubmit={handleAddEvent}
      />
      <AwardModal
        isOpen={isAwardModalOpen}
        onRequestClose={() => setIsAwardModalOpen(false)}
        onSubmit={handleAddAward}
      />
    </>
  );
};

export default OrganizationProfile;
