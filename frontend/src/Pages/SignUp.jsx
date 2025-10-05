import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg justify-center items-center mx-auto my-10" >
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form class="space-y-5">
          {/* <!-- Name --> */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Mukesh Yadav"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          {/* Number */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">
              Number
            </label>
            <input
              type="value"
              placeholder="+91 99364XXXXX"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Email --> */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Password --> */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Confirm Password --> */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- State --> */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">State</label>
            <input
              type="text"
              placeholder="Enter your state"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- District --> */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">District</label>
            <input
              type="text"
              placeholder="Enter your district"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Village --> */}
          <div>
            <label class="block text-gray-700 font-medium mb-1">Village</label>
            <input
              type="text"
              placeholder="Enter your village"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <p class="text-sm text-gray-600 text-center mt-6">
          Already have an account?
          <Link to={'/Login'}>
            <a href="#" class="text-blue-600 font-medium hover:underline">
            Login
          </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
