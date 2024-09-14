import React from "react";
import AOS from "aos";
import xemailWarmupImage from "../images/XemailWarmUp.png";
import xemailAuditImage from "../images/email_audit.png";
// import expenseTrackerImage from "../images/expense_tracker.png"; // Placeholder image
// import chatAppImage from "../images/chat_app.png"; // Placeholder image
// import ticTacToeImage from "../images/tic_tac_toe.png"; // Placeholder image
// import votingDaoImage from "../images/voting_dao.png"; // Placeholder image

// Data for the projects
const projectsData = [
  {
    title: "XEmail Warmup",
    description:
      "An email warmup tool that improves your domain and IP health, boosting email deliverability.",
    liveUrl: "https://b2c.xemailwarmup.com",
    githubUrl: "",
    image: "",
  },
  {
    title: "XEmail Audit",
    description:
      "A powerful tool to audit email domains, providing actionable insights to improve domain reputation.",
    liveUrl: "https://app.xemailaudit.com",
    githubUrl: "",
    image: "",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack application to track expenses, manage budgets, and generate reports.",
    liveUrl: "",
    githubUrl: "https://github.com/Mukeshjha211/Expense-Tracker",
    image: "", 
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app built using Node.js and Express, featuring secure messaging and user authentication.",
    liveUrl: "",
    githubUrl: "https://github.com/Mukeshjha211/chatAppUsingNodeExpress",
    image: "",
  },
  {
    title: "Aleo Tic Tac Toe",
    description:
      "A blockchain-powered version of Tic Tac Toe, offering decentralized gameplay and smart contract integration.",
    liveUrl: "",
    githubUrl: "https://github.com/Mukeshjha211/AleoTicTac",
    image: "",
  },
  {
    title: "Private Voting DAO",
    description:
      "A decentralized voting system using blockchain technology, ensuring secure and anonymous voting.",
    liveUrl: "",
    githubUrl: "https://github.com/Mukeshjha211/Private_voting_dao",
    image: "",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="p-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
  >
    <div className="container mx-auto">
      <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
              <div className="relative group">
                {/* Conditional rendering for image or fallback */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">
                      {project.title}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.liveUrl ? (
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md">
                      View Project
                    </span>
                  ) : (
                    <span className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-md">
                      View on GitHub
                    </span>
                  )}
                </div>
              </div>
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-primary transition-transform duration-300 hover:text-secondary">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {/* Links */}
              <div className="flex items-center justify-start space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:from-indigo-600 hover:to-pink-600 transition-all duration-300"
                  >
                    View Project
                  </a>
                )}
                {project.githubUrl && !project.liveUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition-all duration-300"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
