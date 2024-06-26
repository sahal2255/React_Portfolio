// src/components/About.js

import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="about">
      <Reveal>
        <div className="grid place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a passionate MERN stack developer with extensive experience
                in building and maintaining web applications. I specialize in
                working with MongoDB, Express.js, React.js, and Node.js to
                create efficient, scalable, and user-friendly solutions. My
                expertise includes developing both front-end and back-end
                components, ensuring seamless integration, and delivering
                high-quality products to clients.
              </p>
            </div>
            <div className="flex flex-col mt-10 items-center gap-7">
  <div className="bg-gray-800/40 p-4 rounded-lg w-full">
    <h3 className="md:text-4xl text-2xl font-semibold text-white text-center mb-4">
      My Journey
    </h3>
    <p className="text-sm md:text-base text-gray-300 text-center leading-7">
      As a dedicated MERN stack developer, I have honed my skills in MongoDB, Express.js, React.js, and Node.js. My journey has been marked by a passion for learning, a commitment to excellence, and a drive to build innovative and efficient web applications.
    </p>
  </div>
  <div className="bg-gray-800/40 p-4 rounded-lg w-full">
    <h3 className="md:text-4xl text-2xl font-semibold text-white text-center mb-4">
      What I Offer
    </h3>
    <p className="text-sm md:text-base text-gray-300 text-center leading-7">
      I bring to the table a blend of front-end and back-end development skills, ensuring seamless integration and high-quality solutions. Whether you're looking to build a new application from scratch or enhance an existing one, I am here to help you achieve your goals.
    </p>
  </div>
  <div className="bg-gray-800/40 p-4 rounded-lg w-full">
    <h3 className="md:text-4xl text-2xl font-semibold text-white text-center mb-4">
      Let's Collaborate
    </h3>
    <p className="text-sm md:text-base text-gray-300 text-center leading-7">
      If you're in need of a reliable and skilled developer to bring your project to life, let's connect. Together, we can turn your ideas into reality and create something truly exceptional.
    </p>
  </div>
</div>

          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
