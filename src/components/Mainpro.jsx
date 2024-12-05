import React from 'react';
import project6 from "../assets/dryvitals.png";
import QuickFix from '../assets/Quick_fiz.png';
import { AiFillGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: QuickFix,
    title: "QuickFix",
    description:
      "Quick Fix is an innovative web platform designed to connect users with professional service providers for their home and business needs. The platform streamlines the process of booking skilled professionals for tasks such as repairs, maintenance, and other essential services. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
    links: {
      site: "https://quickfix-frontend.onrender.com/",
      githubFrontend: "https://github.com/sahal2255/QuickFix_Backend",
      githubBackend: "https://github.com/sahal2255/QuickFix_Frontend",
    },
  },
  {
    img: project6,
    description: `DryVitals.shop is an e-commerce website built to provide users with a seamless shopping experience. The frontend is developed using HTML, CSS, and Bootstrap, ensuring a responsive and visually appealing interface. On the server side, Node.js using to create a backend while MongoDB serves as the database for managing product listings, user data, and orders.`,
    links: {
      site: "https://dryvitals.shop",
      github: "https://github.com/sahal2255/dryvitals",
    },
  },
  
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Main Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-12`}
          >
            <div className='w-full md:w-1/2 p-4 flex justify-center'>
              <img
                src={project.img}
                alt={project.title}
                className='w-[300px] h-[200px] object-cover rounded-lg shadow-lg'
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>
                {project.title}
              </h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a
                  href={project.links.site}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                >
                  View Site
                </a>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center space-x-2'
                  >
                    <AiFillGithub />
                    <span>GitHub</span>
                  </a>
                )}
                {project.links.githubFrontend && (
                  <a
                    href={project.links.githubFrontend}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center space-x-2'
                  >
                    <AiFillGithub />
                    <span>Frontend</span>
                  </a>
                )}
                {project.links.githubBackend && (
                  <a
                    href={project.links.githubBackend}
                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center space-x-2'
                  >
                    <AiFillGithub />
                    <span>Backend</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
