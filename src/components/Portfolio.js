// src/components/Portfolio.js
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import profileImage from "../images/mukeshJha.jpg";

// Example data structure for About section
const aboutData = {
  profileImage: profileImage,
  description: [
    "Hi, I'm Mukesh Kumar Jha, a Full Stack Developer with 1 year of experience. I specialize in React, Node.js, JavaScript, and more.",
    "I have worked on several projects that showcase my skills in both front-end and back-end development.",
  ],
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
