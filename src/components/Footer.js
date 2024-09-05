import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-primary text-white p-6 md:p-8 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-medium">
          &copy; {new Date().getFullYear()} Mukesh Kumar Jha. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <SocialIcon
            url="https://www.linkedin.com/in/mukesh-kumar-jha-71aab4228"
            className="text-lg transition-transform duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          />
          <SocialIcon
            url="https://github.com/Mukeshjha211"
            className="text-lg transition-transform duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          />
          <SocialIcon
            url="https://x.com/mukeshjha2111"
            className="text-lg transition-transform duration-300 transform hover:scale-110"
            aria-label="Twitter Profile"
          />
        </div>
        <div className="mt-4">
          {isSubmitted ? (
            <p className="text-lg font-medium text-yellow-400">
              Thank you for subscribing! We'll be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <label htmlFor="email" className="text-lg font-medium mb-2">
                Subscribe to my newsletter:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 mb-2 border border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-primary px-4 py-2 rounded-lg font-medium transition-transform duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
