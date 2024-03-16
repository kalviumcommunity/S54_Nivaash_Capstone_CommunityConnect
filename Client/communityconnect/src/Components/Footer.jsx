import React from 'react';
import logo from "../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src={logo} alt="" />
          <p className='text-start text-lg' >Nivaash<br/>Professional Full Stack Web Developer</p>
        </aside> 
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Climate Causes</a>
          <a className="link link-hover">Fund Raising</a>
          <a className="link link-hover">Helping People in Need</a>
          <a className="link link-hover">Many More</a>
        </nav> 
        <nav> 
          <form action="mailto:nidishnivash@gmail.com" method="post" enctype="text/plain">
            <h6 className="footer-title">Contact Us</h6> 
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label> 
              <div className="join">
                <input type="text" name="email" placeholder="user@mail.com" className="input input-bordered join-item" required /> 
                <button type="submit" className="btn btn-primary join-item">Contact</button>
              </div>
            </fieldset>
          </form>
        </nav> 
        <nav>
          <h6 className="footer-title">Social</h6> 
          <div className="grid grid-flow-col gap-4">
            <a href="#"><InstagramIcon className="w-6 h-6 fill-current" /></a>
            <a href="#"><LinkedInIcon className="w-6 h-6 fill-current" /></a>
            <a href="#"><GitHubIcon className="w-6 h-6 fill-current" /></a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
