import Pic from "../assets/SignUp.png";
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import NavBar from "../Components/NavBar.jsx";

function SignUp() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 overflow-y-hidden"> {/* Correct class name here */}
        <div className="w-screen h-full flex items-center justify-center">
          {/* Left side div */}
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <h1 className="text-2xl text-black text-center mb-4">Alone, we can do so little; together, we can do so much.</h1>
            <p className="text-black mb-4">- Helen Keller</p>
            <img src={Pic} className="mb-20" width={"350px"} alt="Quote image" />
          </div>
          {/* Right side div */}
          <div className="w-1/2 p-10 h-full flex flex-col items-center shadow-md" style={{ boxShadow: "-5px 0px 5px 0px rgba(0,0,0,0.5)" }}>
            <h1 className="text-black text-3xl mt-5 mb-6">Sign Up</h1>
            <form className="flex flex-col items-center space-y-6 w-full max-w-md">
              <div className="flex justify-center items-center">
                <MailIcon className="mr-2" />
                <input type="email" id="email" placeholder="Your email" name="email" required className="w-80 px-4 py-2  border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black" />
              </div>
              <div className="mb-4 flex justify-center items-center">
                <VpnKeyIcon className="mr-2" />
                <input type="password" id="password" name="password" required placeholder="Enter your Password" className="w-80 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black" />
              </div>
              <div className="mb-4 flex justify-center items-center">
                <VpnKeyIcon className="mr-2" />
                <input type="password" id="repeatPassword" name="repeatPassword" placeholder="Confirm your Password" required className="w-80 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black" />
              </div>
              <button type="submit" className="w-2/4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
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
        </div>
      </div>
    </>
  );
}

export default SignUp;
