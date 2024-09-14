import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

const Contact = () => (
  <section id="contact" className="p-8 bg-background">
    <div className="container mx-auto">
      <h2
        className="text-3xl font-semibold mb-6 text-primary text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Get In Touch
      </h2>
      <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-200">
        <p className="mb-4 text-gray-700 text-lg font-medium">
          Feel free to reach out to me through the following methods:
        </p>
        <ul className="space-y-4">
          <li className="text-gray-700 text-lg font-medium flex items-center">
            {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-primary" /> */}
            <SocialIcon fallback="mailto" className="mr-1 text-primary" />
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:mukeshjha7464@gmail.com" className="text-primary">
              mukeshjha7464@gmail.com
            </a>
          </li>
          <li className="text-gray-700 text-lg font-medium flex items-center">
            {/* <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-primary" /> */}
            <SocialIcon
              url="https://www.linkedin.com/in/mukesh-kumar-jha-71aab4228"
              className="mr-1 text-primary"
            />
            <span className="font-bold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/mukesh-kumar-jha-71aab4228"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mukesh Kumar Jha
            </a>
          </li>
          {/* <li className="text-gray-700 text-lg font-medium flex items-center">
            <SocialIcon fallback="whatsapp" className="mr-1 text-primary" />
            <span className="font-bold">Whatsapp:</span>{" "}
            <a href="tel:+918287444564" className="text-primary">
              +91 8287444564
            </a>
          </li> */}
          <li className="text-gray-700 text-lg font-medium flex items-center">
            {/* <FontAwesomeIcon icon={faTwitter} className="mr-2 text-primary" /> */}
            <SocialIcon
              url="https://x.com/mukeshjha2111"
              className="mr-1 text-primary"
            />
            <span className="font-bold">Twitter:</span>{" "}
            <a href="https://x.com/mukeshjha2111" className="text-primary">
              @mukeshjha2111
            </a>
          </li>
          <li className="text-gray-700 text-lg font-medium flex items-center">
            {/* <FontAwesomeIcon icon={faTwitter} className="mr-2 text-primary" /> */}
            <SocialIcon
              url="https://github.com/Mukeshjha211"
              className="mr-1 text-primary"
            />
            <span className="font-bold">GitHub:</span>{" "}
            <a href="https://github.com/Mukeshjha211" className="text-primary">
              @mukeshjha211
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Contact;
