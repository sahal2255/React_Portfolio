import React from 'react';
import project1 from "../assets/quizz.png"
import project2 from "../assets/qrcode.png"
import project3 from "../assets/survey.png"
import project4 from "../assets/weather.png"
import project5 from "../assets/brandio.png"
// import project6 from "../assets/dryvitals.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "React Quizz App",
      description: "UI for frontend development using React.",
      links: {
        site: "https://quizzapp-bay.vercel.app",
        github: "https://github.com/sahal2255/quizzapp",
      },
    },
    {
      img: project2,
      title: "React QRCode Generator",
      description: "UI for frontend development using React.",
      links: {
        site: "https://react-qrcode-omega.vercel.app/",
        github: "https://github.com/sahal2255/reactQrcode",
      },
    },
    {
      img: project3,
      title: "React Survey App",
      description: "UI for frontend development using React.",
      links: {
        site: "https://survey-rust-xi.vercel.app",
        github: "https://github.com/sahal2255/survey",
      },
    },
    {
      img: project4,
      title: "Weather APP",
      description: "UI for frontend development and Api using React.",
      links: {
        site: "https://github.com/sahal2255/weatherapp",
        github: "https://github.com/sahal2255/weatherapp",
      },
    },
    {
      img: project5,
      title: "Brand Io UI",
      description: "UI for frontend development using React.",
      links: {
        site: "https://brandio-indol.vercel.app",
        github: "https://github.com/sahal2255/brandio",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Mini Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio