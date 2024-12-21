import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/messages", formData);
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset the form
      setTimeout(() => {
        setSuccessMessage(""); // Hide the message after 3 seconds
      }, 3000);
    } catch (error) {
      console.error("There was an error sending the message:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow-md">
      <h1 className="text-2xl font-bold text-center my-4">Contact Us</h1>
      {successMessage && (
        <div className="bg-green-500 text-white font-bold py-2 px-4 mb-4 rounded">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-black"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-black"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded text-black"
            placeholder="Ask me Something !!!"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
