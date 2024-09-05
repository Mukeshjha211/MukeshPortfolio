import React from "react";
import AOS from "aos";
import xemailWarmupImage from "../images/XemailWarmUp.png";
import xemailAuditImage from "../images/email_audit.png";

// Data for the projects
const projectsData = [
  {
    title: "XEmailWarmup",
    description:
      "A tool that performs email warmup to enhance the health of your domain and IP address, ensuring better email deliverability.",
    link: "https:/b2c.xemailwarmup.com",
    image: xemailWarmupImage, // Placeholder image URL
  },
  {
    title: "XEmailAudit",
    description:
      "An auditing tool for domains that provides insights and suggestions to improve email effectiveness and overall domain reputation.",
    link: "https://app.xemailaudit.com",
    image: xemailAuditImage, // Placeholder image URL
  },
  {
    title: "XEmailWarmup",
    description:
      "A tool that performs email warmup to enhance the health of your domain and IP address, ensuring better email deliverability.",
    link: "https:/b2c.xemailwarmup.com",
    image: xemailWarmupImage, // Placeholder image URL
  },
  {
    title: "XEmailAudit",
    description:
      "An auditing tool for domains that provides insights and suggestions to improve email effectiveness and overall domain reputation.",
    link: "https://app.xemailaudit.com",
    image: xemailAuditImage, // Placeholder image URL
  },
  {
    title: "XEmailWarmup",
    description:
      "A tool that performs email warmup to enhance the health of your domain and IP address, ensuring better email deliverability.",
    link: "https:/b2c.xemailwarmup.com",
    image: xemailWarmupImage, // Placeholder image URL
  },
  {
    title: "XEmailAudit",
    description:
      "An auditing tool for domains that provides insights and suggestions to improve email effectiveness and overall domain reputation.",
    link: "https://app.xemailaudit.com",
    image: xemailAuditImage, // Placeholder image URL
  },
  {
    title: "XEmailWarmup",
    description:
      "A tool that performs email warmup to enhance the health of your domain and IP address, ensuring better email deliverability.",
    link: "https:/b2c.xemailwarmup.com",
    image: xemailWarmupImage, // Placeholder image URL
  },
  {
    title: "XEmailAudit",
    description:
      "An auditing tool for domains that provides insights and suggestions to improve email effectiveness and overall domain reputation.",
    link: "https://app.xemailaudit.com",
    image: xemailAuditImage, // Placeholder image URL
  },
  {
    title: "XEmailWarmup",
    description:
      "A tool that performs email warmup to enhance the health of your domain and IP address, ensuring better email deliverability.",
    link: "https:/b2c.xemailwarmup.com",
    image: xemailWarmupImage, // Placeholder image URL
  },
  {
    title: "XEmailAudit",
    description:
      "An auditing tool for domains that provides insights and suggestions to improve email effectiveness and overall domain reputation.",
    link: "https://app.xemailaudit.com",
    image: xemailAuditImage, // Placeholder image URL
  },
];

const Projects = () => (
  <section id="projects" className="p-8 bg-background">
    <div className="container mx-auto">
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggered animation delay
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              </div>
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary transition-transform duration-300 hover:text-secondary">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary hover:underline transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
