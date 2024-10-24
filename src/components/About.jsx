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
               working with MongoDB, Express.js, React.js, and Node.js to create
                efficient, scalable, and user-friendly solutions. My expertise includes
                 developing both front-end and back-end components 
                 and ensuring seamless integration throughout the
                  application lifecycle.
              </p>
            </div>
            

          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
