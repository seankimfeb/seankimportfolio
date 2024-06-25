import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/seankimportfolio" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-3xl font-semibold text-gray-900 dark:text-white">Sean Kim</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                to="/seankimportfolio"
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
