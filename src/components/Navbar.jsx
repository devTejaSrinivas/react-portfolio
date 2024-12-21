import React from "react";
import logo from "../assets/logomts.png";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitterSquare,
} from "react-icons/fa";
import { profile_links } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="mb-3 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-2xl">
        <img className="mx-1 w-20" src={logo} alt="Logo" />
      </div>

      <div className="flex items-center justify-center gap-4 px-6 py-2 bg-neutral-900 rounded-3xl shadow-lg">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="technologies"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          Contact Me
        </Link>
      </div>

      <div className="m-8 flex items-center justify-center gap-4">
        <a
          href={profile_links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-4xl text-white hover:text-blue-500 transition-colors" />
        </a>
        <a
          href={profile_links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl text-white hover:text-gray-500 transition-colors" />
        </a>
        <a
          href={profile_links.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-4xl text-white hover:text-pink-500 transition-colors" />
        </a>
        <a
          href={profile_links.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="text-4xl text-white hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
