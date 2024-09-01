import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // For mobile menu icon

const Navbar = ({ brandName }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-extrabold tracking-wide hover:text-yellow-400 transition-colors duration-300">
          {brandName}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden p-2 focus:outline-none transition-transform duration-300 transform hover:scale-110"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:space-x-8 text-lg items-center lg:bg-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 lg:static absolute top-full left-0 w-full lg:w-auto transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } lg:translate-y-0 transition-transform duration-500 ease-in-out shadow-lg lg:shadow-none ${
            isOpen ? "h-screen" : "h-0"
          } lg:h-auto overflow-hidden lg:overflow-visible`}
        >
          <li className="relative group hover:bg-opacity-20 rounded-lg transition-all duration-300">
            <a
              href="#about"
              className="block p-4 lg:inline-block text-white transition-colors duration-300 hover:text-yellow-400"
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              About
            </a>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group hover:bg-opacity-20 rounded-lg transition-all duration-300">
            <a
              href="#projects"
              className="block p-4 lg:inline-block text-white transition-colors duration-300 hover:text-yellow-400"
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              Projects
            </a>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group hover:bg-opacity-20 rounded-lg transition-all duration-300">
            <a
              href="#skills"
              className="block p-4 lg:inline-block text-white transition-colors duration-300 hover:text-yellow-400"
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              Skills
            </a>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group hover:bg-opacity-20 rounded-lg transition-all duration-300">
            <a
              href="#contact"
              className="block p-4 lg:inline-block text-white transition-colors duration-300 hover:text-yellow-400"
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              Contact
            </a>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
