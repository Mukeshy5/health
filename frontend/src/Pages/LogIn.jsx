import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 justify-center items-center mx-auto mt-10">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form class="space-y-5">
          {/* <!-- Phone or Email --> */}
          <div>
            <label class="block text-gray-600 mb-2 font-medium">
              Phone or Email
            </label>
            <input
              type="text"
              placeholder="Enter phone or email"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Password --> */}
          <div>
            <label class="block text-gray-600 mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Forgot password --> */}
          <div class="text-right">
            <a href="#" class="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* <!-- Login button --> */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* <!-- Divider --> */}
        <div class="flex items-center my-6">
          <hr class="flex-grow border-gray-300" />
          <span class="px-3 text-gray-500 text-sm">or</span>
          <hr class="flex-grow border-gray-300" />
        </div>

        {/* <!-- Social login --> */}
        <div class="flex gap-3">
          <button class="w-1/2 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              class="w-5 h-5"
              alt="Google"
            />
            <span>Google</span>
          </button>
          <button class="w-1/2 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              class="w-5 h-5"
              alt="Facebook"
            />
            <span>Facebook</span>
          </button>
        </div>

        {/* <!-- Sign up link --> */}
        <p class="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?
          <Link to={'/SignUp'}>
            <a href="#" class="text-blue-600 font-medium hover:underline">
              Sign Up
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;
