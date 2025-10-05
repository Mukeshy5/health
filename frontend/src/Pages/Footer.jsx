import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 text-gray-300 py-10 mt-10">
        <div class="max-w-6xl mx-auto px-4 grid gap-2 md:grid-cols-4">
          {/* <!-- Brand / Info --> */}
          <div>
            <h2 class="text-2xl font-bold text-white mb-3">Healtho</h2>
            <p class="text-gray-400 text-sm">
              Providing reliable health and service solutions for your everyday
              needs. Accessible, affordable, and secure.
            </p>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h3 class="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <Link to="/AboutUs" class="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact / Social --> */}
          <div>
            <h3 class="text-xl font-semibold text-white mb-3">Contact Us</h3>
            <p class="text-gray-400 text-sm">xyz</p>
            <p class="text-gray-400 text-sm"> XXXXX 43210</p>
            <p class="text-gray-400 text-sm"> xyz@.com</p>

            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
            </div>
          </div>
          {/* Privacy and Policy */}
          <div>
            <h3 class="text-xl font-semibold text-white mb-3">Privacy and Policy</h3>
            <p class="text-gray-400 text-sm">yjgjgygj</p>
            <p class="text-gray-400 text-sm"> XXXXX 432yjfy10</p>
            <p class="text-gray-400 text-sm"> xyz@.cyhjgyjgom</p>

            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
              <a href="#" class="text-gray-400 hover:text-white"></a>
            </div>
          </div>
        </div>

        {/* <!-- Bottom --> */}
        <div class="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          © 2025 HealthCare. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
