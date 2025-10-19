import React from 'react'
import { Link } from 'react-router-dom'

const HospitalLabUser = () => {
  return (
     <>
       <section class="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-6">
    
    {/* <!-- Left Content --> */}
    <div class="md:w-1/2 space-y-6">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        Welcome to Easy Healtho servises<br></br>
        at <span class="text-pink-500">20% Commission</span>
      </h1>

      <p class="text-gray-600 text-lg">
       Easy Healtho apka apna sathi
      </p>

      <div class="flex items-center space-x-2">
        <p class="text-gray-600 text-sm">
         Please fill your corect informatio on this page according to Easy Healtho policy.
          <Link to="/PrivacyPolicy" >
          <a href="#" class="text-pink-500 font-semibold">  PrivacyPolicy</a>
          
          </Link>
        </p>
      </div>

      <Link to="/AddHospitalLab">
        <button class="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300 cursor-pointer">
        Add hospital & Lab
      </button>
      </Link>
    </div>

    {/* <!-- Right Image --> */}
    <div class="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVQKBLq3UTVCStVHLb75iN1XCT4lOu7XL6Q&s" alt="Seller" class="w-full max-w-md drop-shadow-xl"/>
    </div>

  </section>
     </>
  )
}

export default HospitalLabUser