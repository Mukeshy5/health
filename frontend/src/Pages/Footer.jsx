import React from "react";
import { Link } from "react-router-dom";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 overflow-hidden">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 animate-fadeIn">
          {/* <!-- Logo & About --> */}
          <div class="space-y-4 transform hover:scale-105 transition duration-500">
            <div class="flex items-center space-x-3">
              <div class="bg-green-500 w-10 h-10 rounded-lg animate-pulse flex items-center justify-center">
                EH
              </div>
              <h2 class="text-xl font-semibold text-white">Easy Healtho</h2>
            </div>
            <p class="text-sm leading-relaxed">
              Connecting agricultural service providers with those who need
              them.
            </p>
            <div class="flex space-x-4 text-gray-400">
              <a
                href="#"
                class="hover:text-green-400 transform hover:-translate-y-1 transition duration-300"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                class="hover:text-green-400 transform hover:-translate-y-1 transition duration-300"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                class="hover:text-green-400 transform hover:-translate-y-1 transition duration-300"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                class="hover:text-green-400 transform hover:-translate-y-1 transition duration-300"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div class="transform hover:translate-x-1 transition duration-500">
            <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul class="">
              <Link to="/AboutUs">
                <li>
                  <a href="#" class="hover:text-green-400 transition">
                    About Us
                  </a>
                </li>
              </Link>
              <Link to="/Contact">
                <li>
                  <a href="#" class="hover:text-green-400 transition">
                    Help Center
                  </a>
                </li>
              </Link>
              <Link to={"/PrivacyPolicy"}>
                <li>
                  <a href="#" class="hover:text-green-400 transition">
                    Privacy & Policy
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          {/* <!-- Services --> */}
          <div class="transform hover:translate-x-1 transition duration-500">
            <h3 class="text-lg font-semibold text-white mb-4">Social Media</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-green-400 transition">
                  <p className="flex gap-2">
                    <FaSquareWhatsapp className="text-2xl" />
                    WhatsApp
                  </p>
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-green-400 transition">
                  <p className="flex gap-2">
                    <FaFacebookSquare className="text-2xl" />
                    Facebook
                  </p>
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-green-400 transition">
                  <p className="flex gap-2">
                    <FaInstagramSquare className="text-2xl" />
                    Instagram
                  </p>
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-green-400 transition">
                  <p className="flex gap-2">
                    <FaYoutube className="text-2xl" />
                    Youtube
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact --> */}
          <div class="transform hover:-translate-x-1 transition duration-500">
            <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul class="space-y-3">
              {/* <li class="flex items-center space-x-2"><i class="fas fa-map-marker-alt text-green-400"></i><span>123 Farming Street, Agritown, Country</span></li> */}
              <li class="flex items-center space-x-2">
                <i class="fas fa-envelope text-green-400"></i>
                <span>healtho@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 animate-fadeIn">
          <p>
            © 2025 <span id="year"></span> Healtho. All rights reserved. This
            policy is subject to change.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
