import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-50 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-col lg:flex-row">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <ContactForm />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 text-center tracking-tighter pt-20"
        >
          <h2 className="text-2xl font-bold text-center my-4 underline">
            Details
          </h2>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            <div className="flex justify-center">
              <IoMdCall className="pr-2 text-2xl text-white" />
              {CONTACT.phoneNo}
            </div>
          </motion.p>
          <a href="#" className="border-b">
            <div className="flex justify-center">
              <MdEmail className="pr-2 text-2xl text-white" />
              {CONTACT.email}
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
