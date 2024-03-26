import { useForm } from 'react-hook-form';
import Pic from "../assets/Login.webp";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import NavBar from "../Components/NavBar.jsx";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col items-center justify-center bg-[rgba(254,254,254,0.5)] overflow-y-hidden"> 
        <div className="w-screen h-full flex items-center justify-center">
          <div className="w-1/2 p-10 h-full flex flex-col items-center shadow-md" style={{ boxShadow: "15px 0px 15px 0px rgba(0,0,0)" }}>
            <h1 className="text-black text-3xl mt-20 mb-14">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-8 w-full max-w-md">
              <div className="flex justify-center items-center">
                <MailOutlineIcon className="mr-5" style={{ color: "black" }} />
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  name="email" 
                  {...register("email", { required: true })}
                  className={`w-80 px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 bg-white text-black ${errors.email && 'border-red-500'}`} 
                />
              </div>
              {errors.email && <span className="text-red-500">Email is required</span>}
              <div className="mb-4 flex justify-center items-center">
                <VpnKeyIcon className="mr-5" style={{ color: "black" }} />
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Enter your Password" 
                  {...register("password", { required: true })}
                  className={`w-80 px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 bg-white text-black ${errors.password && 'border-red-500'}`} 
                />
              </div>
              {errors.password && <span className="text-red-500">Password is required</span>}
              <button type="submit" className="w-2/4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
              <div className="divider">OR</div>
              <div className="flex justify-center space-x-4">
                <button className="btn flex items-center text-black border-solid border-2  border-gray-500 text-lg md:text-xl  bg-[white] py-2 px-8 rounded-lg hover:bg-opacity-80 transition duration-300">
                  <img width={"20px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="" />Google
                </button>
                <button className="btn flex items-center text-black border-solid border-2  border-gray-500 text-lg md:text-xl  bg-[white] py-2 px-8 rounded-lg hover:bg-opacity-80 transition duration-300">
                  <img width={"20px"} src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png" alt="" />Facebook
                </button>
              </div>
            </form>
          </div>
          <div style={{ boxShadow: "-15px 0px 5px 0px rgba(0,0,0,0.6)" }} className="w-1/2 h-full bg-[rgba(254,254,254,0.5)] flex flex-col justify-center items-center">
            <h1 className="text-2xl text-black text-center mb-4">No act of kindness, no matter how small, is ever wasted.</h1>
            <p className="text-black mb-4">- Pablo Picasso</p>
            <img src={Pic} className="mb-20" width={"600px"} alt="Quote image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
