import React from 'react';
import homePic from "../assets/HomePic.webp"
import NavBar from "../Components/NavBar.jsx"
import Footer from './Footer.jsx';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div style={{height:"80vh"}} className="flex flex-col md:flex-row items-center mt-5 space-y-20 justify-evenly">
        <div style={{width:"100vh"}} className="md:w-1/3 py-12 flex flex-col mt-0 space-y-8">
          <h1 style={{ fontFamily: "Jomolhari",width:"50%" }} className="text-3xl md:text-4xl text-black font-bold mb-0 text-start md:leading-relaxed ">Connecting People, Changing Lives CommunityConnect</h1>
          <p style={{ fontFamily: "itim" }} className="text-lg md:text-2xl mb-8 text-black text-start leading-10 md:leading-normal">Welcome to Community Connect: where people meet, and change begins. Join us to discover, connect, and make a difference .</p>
          <button style={{marginTop:"50px",fontFamily: "itim",letterSpacing:"2px"}} className="btn text-white text-2xl border-none bg-[#2B2D42] w-40">Explore</button>
        </div>
        <div>
          <img className='rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-full mb-24' src={homePic} alt="CashTrackr" width="450px" />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
