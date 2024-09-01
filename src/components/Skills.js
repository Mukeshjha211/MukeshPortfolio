import React from 'react';
import AOS from 'aos'; // Ensure AOS is installed and initialized

// Data for the skills with corresponding hover colors
const skillsData = [
  { name: "HTML", hoverColor: "from-red-500 to-yellow-500" },
  { name: "CSS", hoverColor: "from-blue-500 to-indigo-500" },
  { name: "JavaScript", hoverColor: "from-yellow-400 to-orange-500" },
  { name: "React", hoverColor: "from-blue-400 to-teal-500" },
  { name: "Node.js", hoverColor: "from-green-500 to-lime-500" },
  { name: "Express", hoverColor: "from-red-500 to-yellow-500" },
  { name: "MongoDB", hoverColor: "from-green-600 to-green-800" },
  { name: "SQL", hoverColor: "from-blue-700 to-purple-600" },
  { name: "Sequelize", hoverColor: "from-purple-400 to-purple-600" },
  { name: "TypeScript", hoverColor: "from-blue-600 to-cyan-500" },
  { name: "Git", hoverColor: "from-orange-500 to-red-500" },
  { name: "AWS", hoverColor: "from-yellow-500 to-orange-500" },
  { name: "Linux", hoverColor: "from-blue-500 to-indigo-500" },
];

const Skills = () => (
  <section id="skills" className="p-8 bg-background">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6 text-primary">
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
            <p
              className={`relative text-lg font-medium text-gray-800 bg-clip-text bg-gradient-to-r ${skill.hoverColor} transition-colors duration-500 hover:text-transparent`}
            >
              {skill.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
