import React, { useEffect, useState } from "react";
import profileImage from "../images/mukeshJha.jpg";

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className={`p-8 md:p-16 bg-background mt-3 transition-transform duration-1000 ${isVisible ? 'animate-slideIn' : 'opacity-0'}`}
    >
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-8 text-primary ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:justify-center md:space-x-10 space-y-6 md:space-y-0 mb-8">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
          />

          <div className="text-left max-w-lg">
            {data.description.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl text-text mb-4 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
