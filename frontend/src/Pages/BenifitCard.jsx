import React from "react";

const BenifitCard = () => {
  return (
    <>
       

  {/* <!-- Hero Section --> */}
  <section class="text-center py-16">

    <h2 class="text-4xl font-bold mb-4">Benefits of Health Service Card</h2>
    <p class="text-lg text-gray-600">Your all-in-one solution for healthcare rewards, discounts, and identification.</p>
  </section>

  {/* <!-- Cards Section --> */}
  <section class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-16">

    {/* <!-- Card 1 --> */}
    <div class="bg-white shadow-md rounded-2xl grid  p-6 text-center hover:shadow-lg transition">
      <div className="mb-6">
        <img src="https://picsum.photos/seed/picsum/536/354" alt="" />
      </div>
      <h3 class="text-xl font-semibold text-green-600 mb-4">Unique Identification</h3>
      <p class="text-gray-600">Health Service Card provides a unique identification to access services easily.</p>
    </div>

    {/* <!-- Card 2 --> */}
    <div class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
      <div className="mb-6">
        <img src="https://picsum.photos/id/870/536/354?grayscale&blur=2" alt="" />
      </div>
      <h3 class="text-xl font-semibold text-green-600 mb-4">Exclusive Discounts</h3>
      <p class="text-gray-600">Using your Health Service Card gives you special discounts on healthcare services.</p>
    </div>

    {/* <!-- Card 3 --> */}
    <div class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
      <div className="mb-6">
        <img src="https://picsum.photos/id/1060/536/354?blur=2" alt="" />
      </div>
      <h3 class="text-xl font-semibold text-green-600 mb-4">Rewards Program</h3>
      <p class="text-gray-600">Earn rewards and benefits whenever you use your Health Service Card for services.</p>
    </div>

    {/* <!-- Card 4 --> */}
    <div class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
      <div className="mb-6">
        <img src="https://picsum.photos/id/1084/536/354?grayscale" alt="" />
      </div>
      <h3 class="text-xl font-semibold text-green-600 mb-4">Nearby Services</h3>
      <p class="text-gray-600">Find companies and hospitals that accept the Health Service Card via Nearby Services.</p>
    </div>

  </section>
    </>
  );
};

export default BenifitCard;
