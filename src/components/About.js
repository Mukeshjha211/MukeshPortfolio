import React, { useEffect, useState } from "react";
import AOS from 'aos'; // Ensure AOS is initialized if you use it for animations

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
        threshold: 0.2,
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
      className={`p-8 md:p-16 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden ${
        isVisible ? "animate-slideIn" : "opacity-0"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-12 relative z-10">
        {/* Profile Image */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 max-w-xs mx-auto rounded-full overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          {/* Decorative border */}
          <div className="absolute inset-0 border-4 border-primary rounded-full opacity-50 transform scale-110"></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-primary"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Me
          </h2>
          <div
            className={`space-y-4 md:space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 ${
              isVisible ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            {data.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
