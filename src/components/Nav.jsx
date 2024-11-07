import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom'; 
import logo from '../assets/images/logo.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  
  const isActive = (path) => location.pathname === path ? 'text-purple-700' : 'hover:text-purple-700';

  return (
    <div className="general flex justify-between p-3 mx-10 items-center">
  
      <Link to="/" className="logo-flex flex items-center">
        <img src={logo} alt="Logo" className="h-6 w-6" />
        <h1 className="font-semibold text-slate-800 ml-2 hover:text-purple-700">
          Provee<span className="text-purple-700 hover:text-slate-800">Dev</span>
        </h1>
      </Link>

      
      <div className="hidden lg:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className={`${isActive('/')}`}>Home</Link>
        <Link to="/portfolio" className={`${isActive('/portfolio')}`}>Portfolio</Link>
        <Link to="/about" className={`${isActive('/about')}`}>About Me</Link>
        <Link to="/testimonial" className={`${isActive('/testimonial')}`}>Testimonials</Link>
      </div>

      
      <div className="contact-me w-32 p-3 flex items-center justify-center border border-purple-800 rounded-md hidden lg:flex hover:bg-purple-700 hover:text-red-100">
        <Link to="/contact-me" className="text-purple-950 hover:text-white">Contact me</Link>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(true)} className="text-2xl">
          <FiMenu />
        </button>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-blue-100 text-slate-900 shadow-lg z-50 p-8 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end text-2xl mb-8"
        >
          <FiX />
        </button>
        
      
        <nav className="flex flex-col gap-5">
          <Link to="/" onClick={() => setMenuOpen(false)} className={`${isActive('/')}`}>Home</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)} className={`${isActive('/portfolio')}`}>Portfolio</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={`${isActive('/about')}`}>About Me</Link>
          <Link to="/testimonial" onClick={() => setMenuOpen(false)} className={`${isActive('/testimonial')}`}>Testimonials</Link>
          <div className="contact-me w-full p-3 flex items-center justify-center border border-slate-500 rounded-md mt-4">
            <Link to="/contact-me" onClick={() => setMenuOpen(false)} className="text-slate-900">Contact me</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
