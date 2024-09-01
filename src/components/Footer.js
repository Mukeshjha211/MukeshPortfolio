import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-primary via-secondary to-primary text-white p-6 md:p-8 shadow-lg">
    <div className="container mx-auto text-center">
      <p className="mb-4 text-lg font-medium">
        &copy; {new Date().getFullYear()} Mukesh Kumar Jha. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/"
          className="relative group text-lg font-medium transition-transform duration-300 transform hover:scale-105"
        >
          LinkedIn
          <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href="https://github.com/"
          className="relative group text-lg font-medium transition-transform duration-300 transform hover:scale-105"
        >
          GitHub
          <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          href="https://twitter.com/"
          className="relative group text-lg font-medium transition-transform duration-300 transform hover:scale-105"
        >
          Twitter
          <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
