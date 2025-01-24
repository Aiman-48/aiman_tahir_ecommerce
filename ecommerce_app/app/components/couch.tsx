'use client';
import React from "react";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa"; // Import icons

export const Couch = () => {
  return (
    <section className="relative w-full bg-[#FFFFFF] p-8 grid grid-cols-1 md:grid-cols-[6fr,6fr] gap-8 place-items-center">
    {/* Breadcrumb */}
<div className="absolute top-0 left-12 text-gray-500 text-sm flex gap-2">
  <span className="text-black font-bold cursor-pointer hover:text-blue-500">
    Home
  </span>
  <span className="text-gray-400">&gt;</span> {/* Arrow symbol */}
  <span className="hover:text-blue-500 cursor-pointer">Shop</span>
</div>


      {/* Image Section */}
      <div className="flex flex-col items-center w-full space-y-6">
        {/* Main Image */}
        <img
          src="../couch.jpg"
          alt="Floating Phone"
          className="rounded-lg w-full h-auto max-w-md"
        />

        {/* Thumbnail Images */}
        <div className="flex gap-2">
          <img
            src="../thumbnail1.png"
            alt="Thumbnail 1"
            className="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-500"
          />
          <img
            src="../thumbnail2.jpg"
            alt="Thumbnail 2"
            className="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-500"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start space-y-6 w-full">
        {/* Product Title and Reviews */}
        <h2 className="text-2xl font-bold text-black">Floating Phone</h2>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="text-gray-500">(10 Reviews)</span>
        </div>

        {/* Price and Availability */}
        <p className="text-3xl font-semibold text-black">$1,139.33</p>
        <p className="text-green-500 font-medium">In Stock</p>

        {/* Product Description */}
        <p className="text-gray-500 leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        {/* Color Options */}
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-200 hover:border-blue-500"></button>
          <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-200 hover:border-green-500"></button>
          <button className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-200 hover:border-orange-500"></button>
          <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-200 hover:border-black"></button>
        </div>

        {/* Button and Icons */}
        <div className="flex items-center w-full">
          {/* Select Options Button */}
          <button className="w-64 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600">
            Select Options
          </button>

          {/* Icon Buttons */}
          <div className="flex items-center ml-4">
            <button className="text-gray-500 hover:text-blue-500">
              <FaHeart size={24} />
            </button>
            <button className="text-gray-500 hover:text-blue-500 ml-2">
              <FaCartPlus size={24} />
            </button>
            <button className="text-gray-500 hover:text-blue-500 ml-2">
              <FaEye size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couch;
