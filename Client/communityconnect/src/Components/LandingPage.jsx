import React from 'react';
import homePic from "../assets/HomePic.webp";
import ServicePic from "../assets/Service.webp";
import Male from "../assets/VolunteerMale.png"
import Female from "../assets/VolunteerFemale.png"
import NavBar from "../Components/NavBar.jsx";
import Footer from './Footer.jsx';

const VolunteerCard = ({ volunteer }) => {
  const { name, gender, rating, description } = volunteer;

  return (
    <div className="flex w-80 items-center flex-col">
      <img className="w-20" src={gender === "Male" ? Male : Female} alt={name} style={{ position: "relative", top: "45px" }} />
      <div className="flex flex-col items-center border-l-10 py-5 max-w-xs md:max-w-sm bg-white rounded-3xl overflow-hidden shadow-lg m-2">
        <div className="px-6 py-8">
          <div style={{ fontFamily: "itim" }} className="font-bold text-2xl mb-2 text-black">{name}</div>
          <p style={{ fontFamily: "itim" }} className="text-black text-base text-start">{description}</p>
        </div>
        <div className="rating mb-3">
          {Array.from({ length: 5 }, (_, i) => (
            <input key={i} type="radio" name={`rating-${name}`} className={`mask mask-star-2 ${i < rating ? "bg-orange-400" : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const volunteersData = [
    {
      name: "Nivaash",
      gender: "Male",
      rating: 5,
      description: "Nivaash is a dedicated volunteer at XYZ Community Center, excelling in recruiting and coordinating volunteers. His organizational skills and effective communication ensure smooth operations and high volunteer satisfaction.",
    },
    {
      name: "Ritu",
      gender: "Female",
      rating: 5,
      description: "Ritu is a compassionate volunteer known for her excellent coordination and communication skills at XYZ Community Center. She fosters a supportive environment, enhancing volunteer engagement and project success.",
    },
    {
      name: "Rishav",
      gender: "Male",
      rating: 3,
      description: "Rishav is a dynamic volunteer at XYZ Community Center, adept at managing schedules and facilitating communication among volunteers. His commitment to community service and resilience make him a valuable asset to the team.",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row items-center md:items-stretch mt-5 space-y-5 md:space-y-0 md:space-x-5 justify-center md:justify-between">
        <div className="md:w-1/2 flex flex-col bg-white justify-center items-start ml-11">
          <h1 style={{ fontFamily: "Jomolhari", width: "90%" }} className="text-3xl md:text-4xl text-black font-bold mb-3 text-center md:mb-10 md:text-left md:leading-relaxed ">Connecting People,<br /> Changing Lives CommunityConnect</h1>
          <p style={{ fontFamily: "itim", width: "90%", lineHeight: "1.8" }} className="text-lg md:text-2xl mb-8 text-black text-center md:text-left leading-7">Welcome to Community Connect: where people meet, and change begins. Join us to discover, connect, and make a difference .</p>
          <div className="flex justify-center md:justify-start w-11/12"> 
            <button style={{ fontFamily: "itim", letterSpacing: "1px" }} className="btn text-white text-lg  md:text-xl border-none bg-[#2B2D42] py-2 px-6">Explore</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img className='rounded-full' src={homePic} alt="CommunityConnect" width="80%" />
        </div>
      </div>

      <div className='bg-[#2b2c43] h-100'>
        <h1 style={{ fontFamily: "Jomolhari", letterSpacing: "1.5px" }} className='text-white text-4xl pt-20'>Top Volunteers</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly mt-10 mb-10 p-5 pb-20">
          {volunteersData.map((volunteer, index) => (
            <VolunteerCard key={index} volunteer={volunteer} />
          ))}
        </div>
      </div>

      

      <div className="flex flex-col md:flex-row items-center md:items-stretch mt-10 mb-10 space-y-5 md:space-y-0 py-10 md:space-x-5 justify-center md:justify-between">
        <div className="md:w-1/2 flex justify-center items-center">
          <img className='rounded-full' src={ServicePic} alt="CommunityConnect" width="80%" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-start ml-11">
          <h1 style={{ fontFamily: "Jomolhari", width: "90%", lineHeight: "1.6" }} className="text-3xl md:text-4xl text-black font-bold mb-3 text-center md:mb-10 md:text-left md:leading-relaxed "> Our Services</h1>
          <p style={{ fontFamily: "itim", width: "90%", lineHeight: "1.8" }} className="text-lg md:text-2xl mb-8 text-black text-center md:text-left leading-7">Community Connect offers a range of services facilitating collaboration between Social Welfare Organizations and volunteers. From event posting to volunteer requests, we empower individuals and organizations to work together towards meaningful social impact</p>
          <div className="flex justify-center md:justify-start w-11/12"> 
            <button style={{ fontFamily: "itim", letterSpacing: "1px" }} className="btn text-white text-lg md:text-xl border-none bg-[#2B2D42] py-2 px-6">Start Helping !</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
