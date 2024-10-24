import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiExpress, SiPostman, SiVisualstudiocode, SiGit,SiTailwindcss } from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      {name:"Tailwind Css" , icon:<SiTailwindcss  className="text-blue-500"/>}
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-black" /> },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
    ],
  },
  {
    category: "Version Control",
    technologies: [
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      { name: "Git", icon: <SiGit className="text-red-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[750px] mx-auto flex flex-col justify-center px-6 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-6xl font-bold mb-6 text-center text-white tracking-wide">
          My Skills
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-indigo-700 p-6 rounded-lg bg-white hover:scale-90"
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-black tracking-wide">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 hover:scale-110 transition transform duration-300"
                  >
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-lg font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
