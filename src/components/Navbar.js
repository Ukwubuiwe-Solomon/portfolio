import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    { id: 1, link: "home" },

    { id: 2, link: "about" },

    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="bg-black w-full h-20 text-white fixed flex justify-between items-center px-4">
      <div>
        <h1 className="text-5xl font-signature">Solomon</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="text-gray-500 font-medium px-2 hover:scale-105 duration-200 capitalize cursor-pointer"
          >
           <Link to={link} smooth duration={500} >{link}</Link> 
          </li>
        ))}
      </ul>
      <div onClick={()=>setNav(!nav)} className="text-gray-500 cursor-pointer z-10 pr-4 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col text-gray-500 justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">

        {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 py-6 capitalize cursor-pointer text-4xl"
            >
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500} >{link}</Link> 
            </li>
          ))}
          
          
        </ul>
      )}
      
    </div>
  );
};

export default Navbar;
