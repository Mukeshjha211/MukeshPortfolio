import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaAws, FaLinux } from "react-icons/fa";
import { SiMongodb, SiExpress, SiSequelize, SiTypescript, SiMysql } from "react-icons/si";
import AOS from "aos"; // Ensure AOS is installed and initialized

// Data for the skills with corresponding hover colors and icons
const skillsData = [
  { name: "HTML", hoverColor: "from-red-500 to-yellow-500", icon: <FaHtml5 className="text-red-500" /> },
  { name: "CSS", hoverColor: "from-blue-500 to-indigo-500", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", hoverColor: "from-yellow-400 to-orange-500", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", hoverColor: "from-blue-400 to-teal-500", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", hoverColor: "from-green-500 to-lime-500", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", hoverColor: "from-red-500 to-yellow-500", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", hoverColor: "from-green-600 to-green-800", icon: <SiMongodb className="text-green-600" /> },
  { name: "SQL", hoverColor: "from-blue-700 to-purple-600", icon: <SiMysql className="text-blue-700" /> },
  { name: "Sequelize", hoverColor: "from-purple-400 to-purple-600", icon: <SiSequelize className="text-purple-500" /> },
  { name: "TypeScript", hoverColor: "from-blue-600 to-cyan-500", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Git", hoverColor: "from-orange-500 to-red-500", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "AWS", hoverColor: "from-yellow-500 to-orange-500", icon: <FaAws className="text-yellow-500" /> },
  { name: "Linux", hoverColor: "from-blue-500 to-indigo-500", icon: <FaLinux className="text-indigo-500" /> },
];

const Skills = () => (
  <section id="skills" className="p-8 bg-background">
    <div className="container mx-auto text-center">
      <h2
        className="text-3xl font-semibold mb-6 text-primary text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="relative bg-white shadow-lg p-6 rounded-lg border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggered animation delay
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-lg"></div>
            <div className="relative flex flex-col items-center">
              {/* Skill Icon */}
              <div className="text-4xl mb-3 transition-colors duration-500">
                {skill.icon}
              </div>
              {/* Skill Name */}
              <p
                className={`relative text-lg font-medium text-gray-800 bg-clip-text bg-gradient-to-r ${skill.hoverColor} transition-colors duration-500 hover:text-transparent`}
              >
                {skill.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
