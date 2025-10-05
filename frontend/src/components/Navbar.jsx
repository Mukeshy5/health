import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="bg-gradient-to-r from-green-300 to-teal-300 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0">
              <Link to={"/"}>
                <a
                  href="#"
                  class="text-2xl font-bold text-purple-500 tracking-wider"
                >
                  <span class="mr-2"></span> Healtho
                  <span class="text-gray-900"></span>
                </a>
              </Link>
            </div>

            <div class="flex items-center space-x-4">
              <div class="relative">
                <select
                  id="language-selector"
                  class="block w-full px-3 py-1 text-sm text-gray-700 border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="en">English</option>
                  <option value="Hi">Hindi</option>
                </select>
              </div>

              <Link to={"/LogIn"}>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-purple-50 transition duration-150 ease-in-out"
                >
                  Log In
                </a>
              </Link>
              <Link to={"/SignUp"}>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 transition duration-150 ease-in-out"
                >
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
