// src/components/Portfolio.js
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import profileImage from "../images/mukeshMountainProfile.jpg";
import companyLogo from "../images/xgrowth_llc_logo.jpeg";

// Example data structure for About section
const aboutData = {
  profileImage: profileImage,
  description: [
    `Hi, I’m Mukesh Kumar Jha, a passionate and dedicated Full Stack Developer with a strong foundation in both front-end and back-end development. At 23 years old, I have already accumulated a year of professional experience, during which I've had the opportunity to work on a variety of projects that have honed my skills and deepened my love for creating impactful digital solutions.

From an early age, I was drawn to the world of technology, fascinated by how it could solve real-world problems and connect people across the globe. This curiosity led me to pursue a career in software development, where I could combine my technical abilities with my creativity to build intuitive and efficient applications.

In my role as a Full Stack Developer, I’m proficient in a wide range of technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB. I have experience working with both relational and non-relational databases, and I’m comfortable navigating the complexities of full-stack development, from designing responsive user interfaces to implementing robust server-side logic.

Throughout my career, I’ve been involved in numerous projects that have allowed me to showcase my versatility and problem-solving skills. Whether it’s developing a sleek front-end application that enhances user experience or architecting a scalable back-end system that ensures optimal performance, I approach every project with a commitment to excellence and a focus on delivering value to users.

One of the things I enjoy most about being a developer is the continuous learning and growth that comes with the territory. I’m always exploring new tools and technologies, keeping up with industry trends, and seeking out challenges that push me to expand my skill set. This drive for improvement not only fuels my professional development but also ensures that I’m always bringing fresh ideas and innovative solutions to the table.

In addition to my technical skills, I’m a strong communicator and a collaborative team player. I believe that the best results come from working closely with clients and colleagues, understanding their needs, and translating those needs into effective and elegant code. I take pride in my ability to bridge the gap between technical and non-technical stakeholders, ensuring that everyone is aligned and working towards a common goal.

Looking ahead, I’m excited to continue my journey in the tech industry, taking on new challenges and contributing to projects that make a difference. My goal is to leverage my skills and experience to create software that not only meets the needs of today’s users but also anticipates the demands of tomorrow’s digital landscape.

Thank you for taking the time to learn a bit about me. I’m always open to connecting with fellow developers, potential clients, or anyone interested in technology. Feel free to reach out if you’d like to discuss a project, share ideas, or just chat about the latest in tech!

`,
  ],
};

const experienceData = {
  companyName: "XGrowth Technology",
  role: "Full Stack Developer",
  duration: "June 2023 - Present",
  companyLogo: companyLogo,
  description:
    "I have been working as a Full Stack Developer at XGrowth Technology since June 2023. My role involves developing and maintaining web applications, working closely with front-end and back-end technologies. I also collaborate with cross-functional teams to deliver high-quality solutions, ensuring optimal performance and scalability. My work has contributed to enhancing the company's product offerings and improving customer satisfaction.",
};

const Portfolio = () => {
  return (
    <>
      <div>
        <Navbar brandName="Mukesh Kumar Jha" />
        <section id="about">
          <About data={aboutData} />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section>
          <Experience data={experienceData} />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
