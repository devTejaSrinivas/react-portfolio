import React from "react";
import logo from "../assets/logomts.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-2xl">
        <img className="mx-1 w-20" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <FaLinkedin className="text-4xl" />
        <FaGithub className="text-4xl" />
        <FaInstagram className="text-4xl" />
        <FaTwitterSquare className="text-4xl" />
      </div>

      {console.log("Component rendering")}
    </nav>
  );
};

export default Navbar;
