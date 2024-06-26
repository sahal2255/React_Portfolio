import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="bg-gray-900 px-6 py-12 max-w-[1000px] mx-auto md:my-12 rounded-lg shadow-lg" id="contact">
      <Reveal>
        <div className="grid place-items-center">
          <p className="text-gray-100 font-bold text-3xl mb-6">
            Let’s Connect!
          </p>
          <form
            action="https://getform.io/f/raeqgxva"
            method="POST"
            className="w-full max-w-6xl bg-gray-800 p-8 md:p-12 rounded-lg shadow-md"
            id="form"
          >
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-4 pr-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-4 pr-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-4 pr-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="flex mt-8 space-x-4 text-white">
            <a href="https://github.com/sahal2255" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400">
              <AiFillGithub />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
