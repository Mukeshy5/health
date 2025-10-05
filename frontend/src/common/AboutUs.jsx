import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      {/* <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-8"> */}

      {/* <!-- Text Content --> */}

      {/* <!-- Image --> */}
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
            <Link to={"/LearnMore"}>
              <button class="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-md shadow cursor-pointer hover:bg-teal-700 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* </div> */}

      {/* <!-- Features Section --> */}
      <section class="bg-gray-200 py-12">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-6">
              <img src="https://picsum.photos/555/354" alt="" />
            </div>
            <p class="mt-3 text-gray-600">
              This platform offers a variety of services like you can see which
              Hospital and Lab is nearby.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-6">
              <img src="https://picsum.photos/534/354" alt="" />
            </div>
            <p class="mt-3 text-gray-600">
              If you need any tests or doctor consultation, visit Healtho
              Services and Book a slot.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-6">
              <img src="https://picsum.photos/535/354" alt="" />
            </div>
            <p class="mt-3 text-gray-600">
              Visit to Healtho Services can see which type of services provides
              Hospital and Lab.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-6">
              <img src="https://picsum.photos/538/354" alt="" />
            </div>
            <p class="mt-3 text-gray-600">
              Healtho Services is also offering a Card Service. Explain in
              detail
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
