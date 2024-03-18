import React from 'react';
import homePic from "../assets/HomePic.webp"
import NavBar from "../Components/NavBar.jsx"
import Footer from './Footer.jsx';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row items-center md:items-stretch mt-5 space-y-5 md:space-y-0 md:space-x-5 justify-center md:justify-between">
        <div className="md:w-1/2 flex flex-col justify-center items-start ml-11">
          <h1 style={{ fontFamily: "Jomolhari", width: "90%", lineHeight: "1.6" }} className="text-3xl md:text-4xl text-black font-bold mb-3 text-center md:mb-10 md:text-left md:leading-relaxed ">Connecting People,<br /> Changing Lives CommunityConnect</h1>
          <p style={{ fontFamily: "itim", width: "90%", lineHeight: "1.8" }} className="text-lg md:text-2xl mb-8 text-black text-center md:text-left leading-7">Welcome to Community Connect: where people meet, and change begins. Join us to discover, connect, and make a difference .</p>
          <div className="flex justify-center md:justify-start w-full"> 
            <button style={{ fontFamily: "itim", letterSpacing: "1px" }} className="btn text-white text-lg md:text-xl border-none bg-[#2B2D42] py-3 px-6">Explore</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img className='rounded-full' src={homePic} alt="CashTrackr" width="80%" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
