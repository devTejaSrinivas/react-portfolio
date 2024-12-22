import React from "react";
import aboutImg from "../assets/AboutPic.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const renderParagraphs = (text) => {
  return text.split("\n\n").map((paragraph, index) => (
    <p key={index} className="my-4">
      {paragraph}
    </p>
  ));
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
      <h2 className="my-20 text-center text-4xl">About Me</h2>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="About Image"
              style={{ height: "450px", width: "450px" }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              {renderParagraphs(ABOUT_TEXT)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
