import React from 'react';
import project2 from "../assets/qrcode.png";
import project4 from "../assets/weather.png";
import project6 from "../assets/parking.png";
import project7 from "../assets/kanban.png";
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: project4,
    title: "Weather APP",
    description: "UI for frontend development and Api using React.",
    links: {
      site: "https://weatherapp-9arf.vercel.app/",
      github: "https://github.com/sahal2255/weatherapp",
    },
  },
  {
    img: project6,
    title: "React Parking Slot Booking",
    description: "A parking slot booking management app for vendors. State management is handled using Redux for seamless booking and slot allocation.",
    links: {
      site: "https://parking-ecru-five.vercel.app/",
      github: "https://github.com/sahal2255/Parking",
    },
  },
  {
    img: project7,
    title: "React Kanban App",
    description: "A Kanban app built using React and Beautiful DnD for drag-and-drop functionality, providing an intuitive task management experience.",
    links: {
      site: "https://react-kanban-coral.vercel.app/",
      github: "https://github.com/sahal2255/React-Kanban",
    },
  },
  
  
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Mini Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
          >
            <div className='w-full md:w-1/2 p-4'>
              <div className='w-full h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden'>
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a
                  href={project.links.site}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
