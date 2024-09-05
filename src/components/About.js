import React, { useEffect, useState } from "react";

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
      className={`p-8 md:p-16 bg-background mt-3 transition-transform duration-1000 ${
        isVisible ? "animate-slideIn" : "opacity-0"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Profile Image */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {/* Decorative border */}
          <div className="absolute inset-0 border-4 border-primary rounded-lg animate-pulse"></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 text-left">
          <h2
            className="text-3xl font-semibold m-6 text-primary text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Me
          </h2>
          <div
            className={`space-y-4 text-lg md:text-xl leading-relaxed text-gray-700 ${
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
