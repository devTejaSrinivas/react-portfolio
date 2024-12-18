import React from "react";
import logo from "../assets/logomts.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { profile_links } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-2xl">
        <img className="mx-1 w-20" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <a
          href={profile_links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href={profile_links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl" />
        </a>

        <a
          href={profile_links.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-4xl" />
        </a>

        <a
          href={profile_links.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="text-4xl" />
        </a>
      </div>

      {console.log("Component rendering")}
    </nav>
  );
};

export default Navbar;
