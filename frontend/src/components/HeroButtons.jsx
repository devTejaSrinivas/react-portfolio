import React from "react";

const HeroButtons = () => {
  return (
    <div className="flex space-x-4 justify-center mt-8">
      {/* Button For Heading to Projects Section */}
      <a
        href="#projects"
        className="px-6 py-3 text-white font-semibold bg-[#5b18e7] rounded-md transition duration-300 hover:bg-[#4311b3]"
      >
        View Projects
      </a>
      {/* Button For Downloading Resume */}
      <a
        href="public/resume.pdf" // Update this with your resume file path
        download
        className="px-6 py-3 text-white font-semibold bg-[#5b18e7] rounded-md transition duration-300 hover:bg-[#4311b3]"
      >
        Download Resume
      </a>
    </div>
  );
};

export default HeroButtons;
