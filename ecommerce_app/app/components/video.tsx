'use client';
import React from "react";
import { FaPlay } from "react-icons/fa"; // Import the play icon

export const Video = () => {
  return (
    <section className="bg-white py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-red-500 text-sm font-semibold">Problems trying</h3>
        <h1 className="text-2xl md:text-3xl font-bold text-black mt-2">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h1>
        <p className="text-gray-500 mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
        <div>
          <h2 className="text-7xl font-bold text-black">15K</h2>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-7xl font-bold text-black">150K</h2>
          <p className="text-gray-500">Monthly Visitors</p>
        </div>
        <div>
          <h2 className="text-7xl font-bold text-black">15</h2>
          <p className="text-gray-500">Countries Worldwide</p>
        </div>
        <div>
          <h2 className="text-7xl font-bold text-black">100+</h2>
          <p className="text-gray-500">Top Partners</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl">
          <img
            src="./Video Card.png"
            
            className="rounded-lg w-full object-cover"
          />
          
        </div>
      </div>
    </section>
  );
};

export default Video;
