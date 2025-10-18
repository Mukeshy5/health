import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-300 to-teal-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="text-2xl font-bold text-purple-600 tracking-wider cursor-pointer">
                Healtho
              </span>
            </Link>
          </div>

          {/* Hamburger button (mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu items (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              id="language-selector"
              className="block px-3 py-1 text-sm text-gray-700 border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>

            <Link to="/LogIn">
              <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-purple-50 transition duration-150 ease-in-out">
                Log In
              </span>
            </Link>
            <Link to="/SignUp">
              <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 transition duration-150 ease-in-out">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 flex-col  space-y-2">
          <select
            id="language-selector"
            className="block w-full px-3 py-2 text-sm text-gray-700 border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>

          <Link to="/LogIn">
            <span className="block text-center w-full px-4 py-2 text-sm font-medium rounded-md text-purple-700 bg-gray-100 hover:bg-gray-200 transition duration-150">
              Log In
            </span>
          </Link>
          <Link to="/SignUp">
            <span className="block text-center w-full px-4 py-2 mt-3 text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 transition duration-150">
              Sign Up
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
