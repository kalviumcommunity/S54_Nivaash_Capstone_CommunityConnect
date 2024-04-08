// SignUp.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import Pic from "../assets/SignUp.png";
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import NavBar from "../Components/NavBar.jsx";
import { useAuth0 } from "@auth0/auth0-react";

function SignUp() {
  const { loginWithRedirect } = useAuth0();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <>
      <NavBar />
      <div className="flex h-full items-center justify-center  bg-white">
        <div className="flex flex-col items-center w-full h-full">
          <div className="bg-white py-2 flex flex-col justify-center items-center w-full h-max md:flex-row">
            <div style={{boxShadow:"20px 0px 10px 0px rgba(0,0,0,0.7)"}} className="flex flex-col justify-center items-center w-full h-max md:w-1/2 py-36 px-40 shadow-md">
              <h1 className="text-black text-3xl mb-6">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-12 w-full">
                <div className="flex items-center w-96">
                  <MailIcon style={{ color: "black" }} className="mr-2" />
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email" 
                    name="email" 
                    {...register("email", { required: true })}
                    className={`w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 bg-white text-black ${errors.email && 'border-red-500'}`} 
                  />
                </div>
                <div className="flex items-center w-96">
                  <VpnKeyIcon style={{ color: "black" }} className="mr-2" />
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    placeholder="Enter your Password" 
                    {...register("password", { required: true })}
                    className={`w-full px-4 py-2 border rounded-md border-black focus:outline-none focus:border-blue-500 bg-white text-black ${errors.password && 'border-red-500'}`} 
                  />
                </div>
                <div className="flex items-center w-96">
                  <VpnKeyIcon style={{ color: "black" }} className="mr-2" />
                  <input 
                    type="password" 
                    id="repeatPassword" 
                    name="repeatPassword" 
                    placeholder="Confirm your Password" 
                    required 
                    {...register("repeatPassword", { 
                      required: true,
                      validate: (value) => value === document.getElementById('password').value
                    })}
                    className={`w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 bg-white text-black ${errors.repeatPassword && 'border-red-500'}`} 
                  />
                </div>
                {errors.email && <span className="text-red-500">Email is required</span>}
                {errors.password && <span className="text-red-500">Password is required</span>}
                {errors.repeatPassword && <span className="text-red-500">Passwords do not match</span>}
                <button type="submit" className="w-2/4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
              </form>
              <div className="divider">OR</div>
              <div className="flex justify-center space-x-4">
                <button onClick={() => loginWithRedirect()} className="flex items-center text-black border-solid border-2  border-gray-500 text-lg md:text-xl  bg-[white] py-2 px-8 rounded-lg hover:bg-opacity-80 transition duration-300">
                  <img width={"20px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" />Google
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-10 items-center w-full h-full md:w-1/2">
              <h1 className="text-3xl text-black text-center mb-4">Alone, we can do so little; together, we can do so much.</h1>
              <p className="text-2xl text-black mb-4">- Helen Keller</p>
              <img src={Pic} className="mb-10 md:mb-20" width={"500px"} alt="Quote image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
