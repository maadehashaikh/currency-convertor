import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-6 text-center md:text-left grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to TravelSite
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Your journey starts here. Explore new destinations and adventures.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-teal-600 font-bold rounded-lg shadow hover:bg-gray-200">
            Explore Now
          </button>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/2f/2b/86/2f2b8603eb6bd04abfc8ee4fb89bc326.jpg"
            alt="Travel"
            className="rounded-xl shadow-lg w-[80%] object-cover h-[60vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
