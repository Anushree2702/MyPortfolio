import React from 'react';
//import logo from "../assets/userAsset/logo.png";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 
import { LuPenSquare } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 mb-18 flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-0'>
      
      <div className='flex gap-5'>
        <div className='flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/anushree-srivastava-109ab0238/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
          <a href="https://github.com/Anushree2702" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://x.com/Anushree1233702" target='_blank' rel="noopener noreferrer"><FaTwitter/></a>
          <a href="https://leetcode.com/u/Anushree_Srivastava/" target='_blank' rel="noopener noreferrer"><SiLeetcode/></a>
          
        </div>
        {/* <div>
          <button className='bg-white rounded-md p-1 text-black text-extrabold'>Resources</button>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
