import React from "react";

const destinationsData = [
  {
    name: "Paris, France",
    description: "City of Lights",
    image:
      "https://i.pinimg.com/736x/e8/d9/6e/e8d96e881df4785334b2ac2445e27af1.jpg",
  },
  {
    name: "Tokyo, Japan",
    description: "Tradition meets Modernity",
    image:
      "https://i.pinimg.com/736x/62/1a/82/621a82642ec4cd3f9c7158e131431c2d.jpg",
  },
  {
    name: "Santorini, Greece",
    description: "Stunning Sunsets",
    image:
      "https://i.pinimg.com/736x/cc/92/67/cc926732acd183df5c712953cbb27de1.jpg",
  },
  {
    name: "New York, USA",
    description: "City That Never Sleeps",
    image:
      "https://i.pinimg.com/736x/fd/d0/93/fdd0938b400865b2afd2ae5573d9f8b8.jpg",
  },
  {
    name: "Cape Town, South Africa",
    description: "Breathtaking Landscapes",
    image:
      "https://i.pinimg.com/736x/6b/03/d9/6b03d92864d41bc1fceb0876834ddef0.jpg",
  },
  {
    name: "Sydney, Australia",
    description: "Opera House and More",
    image:
      "https://i.pinimg.com/736x/57/06/6c/57066c3d3e73cd653586d5f2235e813a.jpg",
  },
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Destinations</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {destinationsData.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-teal-600">
                {destination.name}
              </h3>
              <p className="text-gray-600 mt-2">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
