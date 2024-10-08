import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Enhanced Logo with styles */}
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="
            mx-2
            w-24 h-auto 
            animate-pop-up 
            rounded-full 
            border-1
            border-transparent 
            bg-gradient-to-r 
            from-pink-200 
            via-purple-200 
            to-blue-200 
            p-1
            shadow-lg 
            hover:shadow-xl 
            hover:scale-110 
            transition-transform 
            duration-300 
            ease-out
          "
        />
      </div>

      {/* Social Icons */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaFacebook />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
