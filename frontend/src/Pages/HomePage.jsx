import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
     <div className="relative w-full max-w-8xl mt-2 overflow-hidden rounded-lg h-130 shadow-lg ">
        <img
          src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
          alt="Planning"
          class="rounded-lg shadow-lg"
        />
        <div>
          <div className="z-20 absolute top-1/5 md:left-20 px-5 text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-white leading-snug">
              Healtho Apka Apna Sathi
            </h1>
            <p class="mt-4 text-lg text-black md:font-bold">
              The information you provided describes the features of a digital
              healthcare platform,<br></br> likely named Healtho Services, which
              offers a range of integrated services to manage health.
            </p>
            
          </div>
        </div>
      </div>

    <div class="max-w-6xl mx-auto px-4 py-10">
      
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800 underline">
        Our Services
      </h1>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Services Card --> */}
        <Link to={"/Services"}>
          <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition hover:bg-purple-50">
            <h2 class="text-xl font-semibold text-gray-700 mb-3">
              Nearest Services
            </h2>
            <p class="text-gray-500">
              Explore all services we provide to nearest services.
            </p>
          </div>
        </Link>

        {/* <!-- Create Card --> */}
        <Link to={'/CreateCard'}>
          <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all  ">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">
            How to Create Card
          </h2>
          <p class="text-gray-500">
            Easily create your digital or physical service cards.
          </p>
        </div>
        </Link>

        {/* <!-- Use Card --> */}
        <Link to={'/UseCard'}>
          <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">
            How to Use Card
          </h2>
          <p class="text-gray-500">
            Access and use your cards anytime, anywhere.
          </p>
        </div>
        </Link>

        {/* <!-- Book Card --> */}
        <Link to={'/BookSlot'}>
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">
            Booking Timing slot
          </h2>
          <p class="text-gray-500">
            Reserve or book services with your personalized cards.
          </p>
        </div>
            </Link>
        {/* <!-- Benefit Cards --> */}
        <Link to={'/BenifitCard'}>

        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">
            Benefit of Card
          </h2>
          <p class="text-gray-500">
            Get exclusive benefits and discounts with benefit cards.
          </p>
        </div>
        </Link>

        {/* <!-- Download Cards --> */}
        <Link to={'/DownloadCard'}>
           <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">
            Download Card
          </h2>
          <p class="text-gray-500">
            Download your digital cards securely and quickly.
          </p>
         </div>
        </Link>
        {/* Biling  */}
        <Link to={'/Bill'}>
           <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">
            Download Bill
          </h2>
          <p class="text-gray-500">
            Download your digital cards securely and quickly.
          </p>
         </div>
        </Link>

        {/* <!-- Hospital Cards --> */}
        <Link to={'/HospitalLabUser'}>
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 class="text-xl font-semibold text-gray-700 mb-3">
            Hospital & Lab User
          </h2>
          <p class="text-gray-500">
            Get hospital-related services and emergency access cards.
          </p>
        </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default HomePage;
