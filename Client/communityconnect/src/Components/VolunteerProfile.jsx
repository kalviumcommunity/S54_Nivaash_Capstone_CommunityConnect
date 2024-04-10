import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Volunteer from "../assets/VolunteerProfilePic.png";
import VolunteerNavBar from "../Components/VolunteerNavBar.jsx";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const VolunteerProfile = () => {
    const volunteerData = {
        name: 'Nivaash',
        image: 'https://via.placeholder.com/200',
        participations: 110,
        rating: 5,
        age: 18,
        email: 'nidishnivash@gmail.com',
        contactNo: '9475726360',
        address: 'BH2, LPU',
        education: [
        {
            EducationalInstitute: 'Lovely Professional University',
            Course: 'B.Tech',
            years: '2023 - 2027',
            location: 'Phagwara, Punjab, India',
        },
        {
            EducationalInstitute: 'Ramco Vidyalaya',
            Course: 'CBSE',
            years: '2014 - 2021',
            location: 'Virudhunagar, Tamil Nadu, India',
        }
    ],
    experience: [
        {
            role: 'Volunteer',
            organization: 'xyz organisation',
            duration: 'May 2022 - Present',
            location: 'Bengaluru, Karnataka, India',
        },
        {
            role: 'Volunteer',
            organization: 'xyz organisation',
            duration: 'May 2021 - Apr 2022 ',
            location: 'Bengaluru, Karnataka, India',
        },
    ],
};

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        ease: 'easeOut',
    },
},
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        ease: 'easeOut',
    },
},
};

useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
    });
}, []);

return (
    <>
    <VolunteerNavBar />
    <motion.div
        className="volunteer-profile flex flex-col items-center bg-white py-4 px-4 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <div className="flex flex-col px-28 mt-5 md:mt-0 md:flex-row items-center justify-between w-full">
            <div data-aos="fade-right">
                <img className="w-40 md:w-48" src={Volunteer} alt={volunteerData.name} />
            </div>
            <div className="flex flex-col justify-between h-24 md:h-28 mt-4 md:mt-0" data-aos="fade-up">
                <div className="flex items-center justify-evenly">
                    <p className="text-4xl md:text-5xl text-green-500">
                        {volunteerData.participations}
                    </p>
                    <div className="text-green-500 flex flex-col justify-center items-center" style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}>
                        <VolunteerActivismIcon style={{ width: '80%', height: '80%' }} />
                    </div>
                </div>
                <div>
                    <p className="text-xl md:text-2xl text-black">Participations</p>
                </div>
            </div>
            <div className="flex flex-col justify-between h-20 md:h-24 mt-4 md:mt-0" data-aos="fade-left">
                <div className="w-36 md:w-44 px-6 md:px-8 flex items-center justify-evenly">
                    <p className="text-4xl md:text-5xl text-orange-400">
                        {volunteerData.rating}
                    </p>
                    <div className="rating rating-lg">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div>
                    <p className="text-xl md:text-2xl text-black">Rating</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-0 justify-items-center" data-aos="fade-up">
            <motion.div className="flex flex-col items-center justify-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#a3b2cc]" style={{ position: "relative", top: "35px", marginTop: "-20px" }}>
                    <BadgeIcon style={{ fontSize: "1.75rem", color: "black" }} />
                </div>
                <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] bg-[#3a3d5b] rounded-3xl overflow-hidden shadow-lg">
                    <div style={{ color: "rgba(254,254,254,0.9)", maxHeight: '200px' }} className="px-4 md:px-6 py-6 md:py-8 space-y-3 mt-2 text-start">
                        <p>
                            Name : <span className="font-medium text-white">{volunteerData.name}</span>
                        </p>
                        <p>
                            Age : <span className="font-medium text-white">{volunteerData.age}</span>
                        </p>
                        <p>
                            Email : <span className="font-medium text-white">{volunteerData.email}</span>
                        </p>
                        <p>
                            Contact no : <span className="font-medium text-white">{volunteerData.contactNo}</span>
                        </p>
                        <p>
                            Address : <span className="font-medium text-white">{volunteerData.address}</span>
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div style={{ marginTop: "-20px" }} className="flex flex-col items-center justify-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#3a3d5b]" style={{ position: "relative", top: "35px" }}>
                    <SchoolIcon style={{ fontSize: "1.75rem", color: "white" }} />
                </div>
                <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] text-black bg-[#a3b2cc] rounded-3xl overflow-hidden shadow-lg">
                    <div className="px-4 md:px-6 py-6 space-y-2 md:py-8 text-start " style={{ maxHeight: '200px' }}>
                        {volunteerData.education.map((EducationalInstitute, index) => (
                            <div key={index}>
                                <li>{EducationalInstitute.EducationalInstitute}</li>
                                <p className="pl-7 text-sm">{EducationalInstitute.Course}</p>
                                <p style={{ color: "rgb(47,47,46)" }} className="pl-7 text-sm">{EducationalInstitute.years}</p>
                                <p style={{ color: "rgb(47,47,46)" }} className="pl-7 text-sm">{EducationalInstitute.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div style={{ marginTop: "-20px" }} className="flex flex-col items-center justify-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#a3b2cc]" style={{ position: "relative", top: "35px" }}>
                    <HomeRepairServiceIcon style={{ fontSize: "1.75rem", color: "black" }} />
                </div>
                <div className="flex flex-col items-center border-l-4 md:border-l-8 py-4 md:py-5 w-full max-w-xs md:max-w-[20rem] bg-[#3a3d5b] rounded-3xl overflow-hidden shadow-lg">
                    <div className="px-4 md:px-6 py-8 space-y-4 md:py-8 text-white text-start overflow-y-auto" style={{ maxHeight: '225px', width: "300px" }}>
                        {volunteerData.experience.map((role, index) => (
                            <div key={index}>
                                <li className="text-base pb-2 text-white md:text-lg">{role.role}</li>
                                <p className="pl-7 pb-2 " style={{ color: "rgba(254,254,254,0.9" }}>{role.organization}</p>
                                <p style={{ color: "rgba(254,254,254,0.5" }} className="pl-7 text-sm ">{role.duration}</p>
                                <p style={{ color: "rgba(254,254,254,0.5" }} className="pl-7 text-sm ">{role.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.div>
</>

  );
};

export default VolunteerProfile;