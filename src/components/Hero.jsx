import React from "react";
// import profilepic from "../assets/profpic.png";
import ProfileImg from "../assets/profile.jpg";
import MyImage from '../assets/myImage.png'
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { SiMongodb,SiExpress } from "react-icons/si";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,

  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["MERN Stack Developer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-300 text-xl md:text-5xl italic mb-4" // Updated to a lighter gray
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-500 md:text-2xl text-2xl tracking-tight mb-4" // Updated to light gray
          >
            HEY, I AM <br />
            <span className="text-white text-4xl font-bold">SAHAL V V</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate MERN Stack developer with extensive experience in both frontend and backend development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              href="/Sahal_Resume.pdf"
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-gray-400 " // Updated to gray border
              download
            >
              Download CV
            </motion.a>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-gray-300 z-20"> {/* Updated to gray */}
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/sahal2255">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/sahal-vv96">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/_.sahal_vv">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={MyImage}
          className="w-[300px] md:w-[450px]" // Added border for emphasis
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <SiMongodb className="text-green-500 mx-2 bg-white rounded-lg"/>
        <SiExpress className="text-black mx-2 bg-white rounded-lg"/>
        <DiReact className="text-blue-500 mx-2 bg-white rounded-lg" />
        <DiNodejsSmall className="text-green-500 mx-2 bg-white rounded-lg" />
        <DiJavascript1 className="text-black bg-yellow-400 rounded-lg mx-2" />
        <DiHtml5 className="text-orange-600 mx-2 bg-white rounded-lg" />
        <DiCss3 className="text-blue-600 mx-2 bg-white rounded-lg" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
