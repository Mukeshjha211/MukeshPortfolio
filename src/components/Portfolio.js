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
    `

Hi, I’m Mukesh Kumar Jha, a passionate Full Stack Developer with a year of professional experience. At 23, I’ve worked on diverse projects that sharpened my skills in both front-end and back-end technologies like HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB. I thrive on solving problems and creating impactful digital solutions, whether it’s designing user-friendly interfaces or building scalable backend systems.

I’m always eager to learn new tools, stay updated with industry trends, and tackle challenges that expand my skill set. I value teamwork, clear communication, and bridging the gap between technical and non-technical stakeholders to ensure project success.

Excited to keep growing and contribute to innovative software solutions, I’m open to new opportunities and connecting with like-minded individuals. Let’s chat!

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
