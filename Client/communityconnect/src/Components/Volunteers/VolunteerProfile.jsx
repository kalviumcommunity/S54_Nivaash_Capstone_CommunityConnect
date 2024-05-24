import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerNavBar from "./VolunteerNavBar";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import Volunteer from "../Assets/VolunteerProfilePic.png";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import CryptoJS from "crypto-js";
import EducationModal from "./VolunteerSignUp/EducationModal";
import ExperienceModal from "./VolunteerSignUp/ExperienceModal";

const VolunteerProfile = () => {
  const [volunteerData, setVolunteerData] = useState(null);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
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
      fetchVolunteerData(userEmail);
    } else {
      console.error("Failed to decrypt email");
    }
  }, [navigate]);

  const fetchVolunteerData = async (userEmail) => {
    try {
      const response = await axios.get(
        `https://communityserver.vercel.app/volunteers/email/${userEmail}`
      );
      if (response.status === 200) {
        setVolunteerData(response.data);
      } else {
        console.error(
          "Failed to fetch volunteer data, status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching volunteer data:", error);
    }
  };

  const handleAddEducation = async (education) => {
    try {
      const response = await axios.put(
        `https://communityserver.vercel.app/volunteers/email/${volunteerData.email}/education`,
        education
      );
      if (response.status === 200) {
        setVolunteerData((prevData) => ({
          ...prevData,
          education: [...prevData.education, education],
        }));
        setIsEducationModalOpen(false);
      } else {
        console.error("Failed to add education, status:", response.status);
      }
    } catch (error) {
      console.error("Error adding education:", error);
    }
  };

  const handleAddExperience = async (experience) => {
    try {
      const response = await axios.put(
        `https://communityserver.vercel.app/volunteers/email/${volunteerData.email}/experience`,
        experience
      );
      if (response.status === 200) {
        setVolunteerData((prevData) => ({
          ...prevData,
          experience: [...prevData.experience, experience],
        }));
        setIsExperienceModalOpen(false);
      } else {
        console.error("Failed to add experience, status:", response.status);
      }
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  };

  if (!volunteerData) {
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
      <VolunteerNavBar />
      <motion.div
        className="volunteer-profile h-full flex flex-col items-center bg-white py-4 px-4 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col px-28 mt-5 md:mt-0 md:flex-row items-center justify-between w-full">
          <div data-aos="fade-right">
            <img
              className="w-40 md:w-48"
              src={Volunteer}
              alt={volunteerData.name}
            />
          </div>
          <div
            className="flex flex-col justify-between h-24 md:h-28 mt-4 md:mt-0"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-evenly">
              <p className="text-4xl md:text-5xl text-green-500">
                {volunteerData.participations}
              </p>
              <div
                className="text-green-500 flex flex-col justify-center items-center"
                style={{ width: "3rem", height: "3rem", fontSize: "1.5rem" }}
              >
                <VolunteerActivismIcon
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-black">Participations</p>
            </div>
          </div>
          <div
            className="flex flex-col justify-between h-20 md:h-24 mt-4 md:mt-0"
            data-aos="fade-left"
          >
            <div className="w-36 md:w-44 px-6 md:px-8 flex items-center justify-evenly">
              <p className="text-4xl md:text-5xl text-orange-400">
                {volunteerData.rating}
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
              <p className="text-xl md:text-2xl text-black">Rating</p>
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
              <BadgeIcon style={{ fontSize: "1.75rem", color: "black" }} />
            </div>
            <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] bg-[#3a3d5b] rounded-3xl overflow-hidden shadow-lg">
              <div
                style={{ color: "rgba(254,254,254,0.9)", maxHeight: "200px" }}
                className="px-4 md:px-6 py-6 md:py-8 space-y-3 mt-2 text-start"
              >
                <p>
                  Name :{" "}
                  <span className="font-medium text-white">
                    {volunteerData.name}
                  </span>
                </p>
                <p>
                  Age :{" "}
                  <span className="font-medium text-white">
                    {volunteerData.age}
                  </span>
                </p>
                <p>
                  Email :{" "}
                  <span className="font-medium text-white">
                    {volunteerData.email}
                  </span>
                </p>
                <p>
                  Contact No :{" "}
                  <span className="font-medium text-white">
                    {volunteerData.contactNo}
                  </span>
                </p>
                <p>
                  Address :{" "}
                  <span className="font-medium text-white">
                    {volunteerData.address}
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
              <SchoolIcon style={{ fontSize: "1.75rem", color: "white" }} />
            </div>
            <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] text-black bg-[#a3b2cc] rounded-3xl overflow-hidden shadow-lg">
              <div
                className="px-4 md:px-6 py-6 space-y-2 md:py-8 text-start"
                style={{ maxHeight: "200px" }}
              >
                {volunteerData.education.map((EducationalInstitute, index) => (
                  <div key={index}>
                    <li>{EducationalInstitute.EducationalInstitute}</li>
                    <p className="pl-7 text-sm">
                      {EducationalInstitute.Course}
                    </p>
                    <p
                      style={{ color: "rgb(47,47,46)" }}
                      className="pl-7 text-sm"
                    >
                      {EducationalInstitute.years}
                    </p>
                    <p
                      style={{ color: "rgb(47,47,46)" }}
                      className="pl-7 text-sm"
                    >
                      {EducationalInstitute.Experiencelocation}
                    </p>
                  </div>
                ))}
                <div className="text-center mt-2">
                  <button
                    onClick={() => setIsEducationModalOpen(true)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
                  >
                    + Add Education
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
              <HomeRepairServiceIcon
                style={{ fontSize: "1.75rem", color: "black" }}
              />
            </div>
            <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] bg-[#3a3d5b] rounded-3xl overflow-hidden shadow-lg">
              <div
                className="px-4 md:px-6 py-8 space-y-4 md:py-8 text-white text-start overflow-y-auto"
                style={{ maxHeight: "225px", width: "300px" }}
              >
                {volunteerData.experience.map((role, index) => (
                  <div key={index}>
                    <p
                      className="pl-7 pb-2 "
                      style={{ color: "rgba(254,254,254,0.9" }}
                    >
                      {role.organization}
                    </p>
                    <p
                      style={{ color: "rgba(254,254,254,0.5" }}
                      className="pl-7 text-sm "
                    >
                      {role.duration}
                    </p>
                    <p
                      style={{ color: "rgba(254,254,254,0.5" }}
                      className="pl-7 text-sm "
                    >
                      {role.Experiencelocation}
                    </p>
                  </div>
                ))}
                <div className="text-center mt-2">
                  <button
                    onClick={() => setIsExperienceModalOpen(true)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
                  >
                    + Add Experience
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <EducationModal
        isOpen={isEducationModalOpen}
        onRequestClose={() => setIsEducationModalOpen(false)}
        onSubmit={handleAddEducation}
      />
      <ExperienceModal
        isOpen={isExperienceModalOpen}
        onRequestClose={() => setIsExperienceModalOpen(false)}
        onSubmit={handleAddExperience}
      />
    </>
  );
};

export default VolunteerProfile;
