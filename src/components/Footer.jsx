import React from 'react';
import logo from '../assets/images/logo.png';
import facebook from '../assets/images/Vector (10).png';
import ig from '../assets/images/Vector (19).png';
import twitter from '../assets/images/Vector (20).png';
import linkedin from '../assets/images/LinkedIn.png';

const Footer = () => {
  return (
    <div className="general bg-blue-50 ">
     <div className="both mx-5">
         {/* Top Section */}
      <div className="mx-5 flex justify-between items-center py-10">
        <div className="logo-flex flex items-center">
          <img src={logo} alt="Logo" className="h-6 w-6" />
          <h1 className="font-semibold text-slate-800 ml-2 hover:text-purple-700">
            Provee<span className="text-purple-700 hover:text-slate-800">Dev</span>
          </h1>
        </div>

        <div className="hidden  lg:flex gap-10">
          <h1>Home</h1>
          <h1>Portfolio</h1>
          <h1>About me</h1>
          <h1>Testimonials</h1>
        </div>

        <div className="flex gap-5 items-center">
          <img src={facebook} alt="Facebook" className="h-4 w-3" />
          <img src={ig} alt="Instagram" className="h-4 w-3" />
          <img src={twitter} alt="Twitter" className="h-4 w-3" />
          <img src={linkedin} alt="LinkedIn" className="h-4 w-3" />
        </div>
      </div>
       <div className="flex lg:hidden gap-5 text-xs justify-center items-center">
       <h1>Home</h1>
          <h1>Portfolio</h1>
          <h1>About me</h1>
          <h1>Testimonials</h1>
       </div>
      <div className="border-t border-gray-300 mx-5"></div>

      {/* Bottom Section */}
      <div className="mx-5 flex justify-between items-center py-10">
        <div className="text-xs">
          <p>Created by <span className="text-purple-700">Provee</span></p>
        </div>
        <div className="flex gap-5 items-center text-xs">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Footer;
