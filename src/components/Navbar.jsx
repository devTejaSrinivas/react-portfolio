import React from "react";
import logo from "../assets/logomts.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitterSquare />
      </div>

      {console.log("Component rendering")}
    </nav>
  );
};

export default Navbar;
