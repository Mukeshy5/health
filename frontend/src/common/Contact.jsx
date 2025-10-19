import React from "react";
import contectImg from "../assets/contectImg.png";
import { FaPencil } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="bg-[url(' m/images?q=tbn:ANd9GcRRdqEcJ9DCZSMcvaab2l9aMsjrljwSPqdImg&s')] bg-cover bg-center flex items-center justify-center min-h-screen text-white">
        <div className="bg-black bg-opacity-70 rounded-2xl shadow-2xl p-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block pb-2">
              Get in Touch
            </h2>
            <p className="text-gray-300">
               We’re here to help you with any questions about your
              Healtho Service Card, discounts, hospital partnerships, or
              technical issues.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-300 to-teal-500 p-4 rounded-full">
                  <FaPencil />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">24 X 7</h3>
                  <p className="text-gray-300">
                    Our team is available to assist you.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-300 to-teal-500 p-4 rounded-full">
                  <FaPencil />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Make sure all details are accurate</h3>
                  <p className="text-gray-300">this helps our support team connect with you quickly and provide the right assistance.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-300 to-teal-500 p-4 rounded-full">
                  <FaPencil />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Submit</h3>
                  <p className="text-gray-300">Once you submit the form, our Easy Healtho support team will contact you soon through your registered email or phone number.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-center text-cyan-400">
              Send Your Query
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="+91 94695XXXXX"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-300 to-teal-500 text-white font-semibold py-3 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
