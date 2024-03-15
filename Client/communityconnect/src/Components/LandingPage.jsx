import React from 'react';
import homePic from "../assets/HomePic.webp"
import NavBar from "../Components/NavBar.jsx"

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row items-center mt-10 space-y-20 justify-evenly h-full">
        <div className="md:w-1/3 py-12 flex flex-col mt-35 space-y-8">
          <h1 style={{ fontFamily: "Jomolhari", lineHeight: "1.5" }} className="text-3xl md:text-5xl text-black font-bold mb-0 text-start leading-normal md:leading-relaxed">Connecting People, Changing Lives CommunityConnect</h1>
          <p style={{ fontFamily: "itim" }} className="text-lg md:text-3xl mb-8 text-black text-start leading-10 md:leading-relaxed">Welcome to Community Connect: where people meet, and change begins. Join us to discover, connect, and make a difference .</p>
          <button style={{marginTop:"50px"}} className="btn text-white text-xl border-none bg-[#2B2D42] w-44">Explore</button>
        </div>
        <div>
          <img className='rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-full' src={homePic} alt="CashTrackr" width="500px" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
