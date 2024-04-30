import React, { useState } from 'react';
import signupImg from '../assets/SignUp.png';
import Navbar from './NavBar.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";  

const SignUp = () => {

  const navigate = useNavigate(); 
  const { loginWithRedirect } = useAuth0();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/volunteers/createvolunteer', formData);
      toast.success('You have successfully created your account.', {
        onClose: () => {
          setFormData({ name: '', email: '', password: '' });
          navigate('/volunteerprofile');
        }
      });
    }catch (error) {
      console.error('Error creating account:', error.message);
      toast.error('An error occurred while creating your account.');
    }
  };

  return (
    <div className='h-full'>
      <ToastContainer />
      {/* <Navbar /> */}
      <div className='flex justify-evenly mt-20'>
        <div className='flex flex-col justify-evenly mb-5' >
          <div >
            <h1 className="text-black text-3xl mt-5 font-bold text-center" style={{fontFamily:"Jomolhari"}} >Sign Up</h1>
            <p style={{ color: "grey" }} className='mb-6 mt-2 text-center font-[inter]'>Enter credential to create your account</p>
          </div>

          <form className="flex flex-col justify-evenly w-full max-w-md" onSubmit={onSubmit}>
            <div className='space-y-4' >
              <label className="input input-bordered flex items-center gap-2 bg-white text-black border-black">
                Name :
                <input
                  type="text"
                  className="grow"
                  placeholder="Nivaash"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-white text-black border-black">
                Email :
                <input
                  type="text"
                  className="grow"
                  placeholder="xyz@mail.com"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-white text-black border-black">
                Password :
                <input
                  type="password"
                  className="grow"
                  placeholder="pass@123"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button type="submit" className=" mt-5  bg-[#F35258] text-white py-2 px-4 rounded-md  hover:bg-red-600 transition duration-300">Create your account</button>

            <div className=" divider divider-neutral text-black">OR</div>
            <button onClick={() => loginWithRedirect({ redirectUri: 'http://localhost:5173/volunteerprofile' })} className="btn flex items-center text-black border-solid border-2 border-gray-500 text-lg md:text-xl bg-[white] py-2 px-8 w-96 rounded-lg hover:bg-opacity-80 transition duration-300"  >
              <img width={"20px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" />Google
            </button>
          </form>
        </div>
        <div className=' flex flex-col justify-evenly space-y-16' >
          <div>
            <h2 className='text-2xl text-black leading-10 mb-0' >"Alone, we can do so little ; together, we can do so much."<br />- Hellen Keller</h2>
          </div>
          <div className='flex justify-center' >
            <img src={signupImg} style={{width:"360px",height:"360px"}}  alt="Signup" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
