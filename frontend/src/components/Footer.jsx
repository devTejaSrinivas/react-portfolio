import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Majari Teja Srinivas. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
