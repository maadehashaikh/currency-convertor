import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Our Travel Services
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        We provide a wide range of travel services to make your journey
        unforgettable. Explore our offerings below:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Customized Travel Packages
          </h3>
          <p className="text-gray-700">
            Tailored itineraries to match your interests, whether you're seeking
            adventure, relaxation, or cultural immersion.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Hotel and Accommodation Booking
          </h3>
          <p className="text-gray-700">
            We offer hotel bookings across the globe, ensuring comfort and
            convenience wherever you stay.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Guided Tours
          </h3>
          <p className="text-gray-700">
            Discover the best of each destination with our expert local guides
            leading the way.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Visa Assistance
          </h3>
          <p className="text-gray-700">
            We assist with the visa application process to ensure your travel
            documents are ready.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Local Experiences
          </h3>
          <p className="text-gray-700">
            Engage in unique, local experiences that allow you to connect with
            the culture of your destination.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            24/7 Customer Support
          </h3>
          <p className="text-gray-700">
            Our support team is always available to assist you with your travel
            needs, ensuring peace of mind throughout your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
