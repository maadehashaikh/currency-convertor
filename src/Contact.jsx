import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-teal-600 text-center">
        Contact Us
      </h2>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg mt-6 p-6">
        <form>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded mb-4"
          />

          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded mb-4"
          />

          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border rounded mb-4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
