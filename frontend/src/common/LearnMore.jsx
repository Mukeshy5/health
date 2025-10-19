import React from 'react'

const LearnMore = () => {
  return (
    <>
        {/* <!-- Header --> */}
  <header class="bg-gradient-to-r from-green-500 to-teal-500 text-white py-8 shadow-md">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold">About Healtho Services</h1>
      <p class="mt-2 text-lg opacity-90">Your digital health hub for easy access to hospitals, labs, and healthcare services.</p>
    </div>
  </header>

  {/* <!-- Main Content --> */}
  <main class="max-w-6xl mx-auto px-4 py-12 space-y-12">

    {/* <!-- Section 1 --> */}
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-semibold text-blue-600">1. Finding Nearby Healthcare Facilities</h2>
      <p class="mt-4 text-gray-700">You can see which Hospital and Lab is nearby.</p>
      <p class="mt-2 text-gray-600">The platform uses location services to display affiliated or nearby hospitals and diagnostic labs.</p>
      <p class="mt-2 font-medium text-green-600">Benefit: Quickly find the closest and most convenient location for medical care or tests.</p>
    </section>

    {/* <!-- Section 2 --> */}
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-semibold text-blue-600">2. Booking Appointments</h2>
      <p class="mt-4 text-gray-700">If you need any tests or doctor consultation, visit Healtho Services and Book a slot.</p>
      <p class="mt-2 text-gray-600">Schedule appointments for doctor consultations or diagnostic tests with our online booking system.</p>
      <p class="mt-2 font-medium text-green-600">Benefit: Removes the need for phone calls and wait times, making care more efficient.</p>
    </section>

    {/* <!-- Section 3 --> */}
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-semibold text-blue-600">3. Discovering Services Offered</h2>
      <p class="mt-4 text-gray-700">Visit Healtho Services to see which type of services hospitals and labs provide.</p>
      <p class="mt-2 text-gray-600">Profiles include detailed services such as cardiology, pediatrics, MRI, and test panels.</p>
      <p class="mt-2 font-medium text-green-600">Benefit: Confirm facility services before you travel or book an appointment.</p>
    </section>

    {/* <!-- Section 4 --> */}
    <section class="bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-semibold text-blue-600">4. The Healtho Service Card</h2>
      <p class="mt-4 text-gray-700">Healtho Services is also offering a Card Service.</p>
      <p class="mt-2 text-gray-600">The card provides financial benefits and convenience, and may work as:</p>
      <ul class="list-disc pl-6 mt-3 text-gray-700 space-y-2">
        <li><span class="font-semibold text-indigo-600">Health & Discount Card:</span> Discounts, rewards, and ID for linking medical records.</li>
        {/* <li><span class="font-semibold text-indigo-600">Digital Health ID Card:</span> Securely store and access your health records.</li> */}
      </ul>
      <p class="mt-4 font-medium text-green-600">Benefit: Save costs, access rewards, and manage all health records in one place.</p>
    </section>

    {/* <!-- Summary --> */}
    <section class="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-lg p-8 text-white text-center">
      <h2 class="text-2xl md:text-3xl font-bold">In Summary</h2>
      <p class="mt-4 max-w-3xl mx-auto">
        Healtho Services is a comprehensive digital health hub that connects you with nearby facilities, enables easy appointment booking, 
        provides detailed service information, and offers a unique Healtho Card to make healthcare more convenient and affordable.
      </p>
    </section>

  </main>
    </>
  )
}

export default LearnMore