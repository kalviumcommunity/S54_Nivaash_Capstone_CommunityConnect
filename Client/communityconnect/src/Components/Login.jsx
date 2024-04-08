// Login.jsx
import React from 'react';
import Pic from "../assets/SignUp.png";
import NavBar from "../Components/NavBar.jsx";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      <NavBar />
      <div className="flex h-full items-center justify-center bg-white">
        <div className="flex flex-col items-center w-full h-full">
          <div className="bg-white py-0 flex flex-col justify-center items-center w-full h-full md:flex-row">
            <div className="flex flex-col justify-center items-center w-full h-full md:w-1/2">
              <div style={{boxShadow:"5px 0px 5px 0px rgba(0,0,0,0.8)"}} className="flex flex-col justify-center py-9 items-center w-full h-full md:w-full px-0 shadow-md">
                <h1 className="text-black text-xl md:text-2xl mb-10">Alone, we can do so little; together, we can do so much.</h1>
                <p className="text-base md:text-lg text-black text-center mb-5">- Helen Keller</p>
                <img src={Pic} className="mb-6 md:mb-12" width={"300px"} alt="Quote image" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 items-center w-full h-full md:w-1/2">
              <div style={{boxShadow:"5px 0px 5px 0px rgba(0,0,0,0.8)"}} className="flex flex-col justify-center py-24 items-center w-full h-full md:w-full px-0 shadow-md">
                <h1 className="text-black text-xl md:text-2xl mb-10">Login</h1>
                {!isAuthenticated && (
                  <form className="flex flex-col items-center space-y-6 w-full h-full">
                    <input type="email" placeholder="Email" className="w-64 md:w-80 px-3 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 bg-white text-black text-sm md:text-base" />
                    <input type="password" placeholder="Password" className="w-64 md:w-80 px-3 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 bg-white text-black text-sm md:text-base" />
                    <button type="submit" className="w-32 md:w-40 bg-blue-500 text-white py-2 px-3 md:px-4 rounded-md hover:bg-blue-600 transition duration-300 text-sm md:text-base">Login</button>
                  </form>
                )}
                <div className=" divider divider-neutral text-black px-40">OR</div>
                <div className="flex justify-center space-x-2 md:space-x-4 h-full">
                  {/* Display the button with login redirect if not authenticated */}
                  {!isAuthenticated && (
                    <button onClick={() => loginWithRedirect()} className="flex items-center text-black border-solid border-2 border-gray-500 text-sm md:text-base bg-[white] py-1 md:py-2 px-3 md:px-4 rounded-lg hover:bg-opacity-80 transition duration-300">
                      <img width={"16px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" />Google
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
