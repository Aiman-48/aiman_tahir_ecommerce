'use client';
import React, { useState } from 'react';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-[#FFFFFF] py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-gray-500 uppercase font-bold tracking-wide text-sm">PRICING</h3>
        <h1 className="text-3xl md:text-8xl font-bold text-black">Simple Pricing</h1>
        <nav className="flex justify-center gap-2 text-gray-500 text-sm mt-4">
          <span className="hover:text-blue-500 font-bold cursor-pointer">Home</span>
          <span className="text-gray-400">&gt;</span>
          <span className="font-bold text-black">Pricing</span>
        </nav>
      </div>

      {/* Subheading Section */}
      <div className=" bg-[#FAFAFA] text-center mb-8">
        <h2 className="text-5xl font-semibold text-black">Pricing</h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        {/* Pricing Toggle */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <span className={`cursor-pointer ${!isYearly ? 'text-blue-500 font-semibold' : 'text-gray-500'}`} onClick={() => setIsYearly(false)}>
            Monthly
          </span>
          <div
            className={`relative w-12 h-6 bg-gray-200 rounded-full cursor-pointer ${isYearly && 'bg-blue-500'}`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div
              className={`absolute w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                isYearly ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </div>
          <span className={`cursor-pointer ${isYearly ? 'text-blue-500 font-semibold' : 'text-gray-500'}`} onClick={() => setIsYearly(true)}>
            Yearly <span className="text-blue-500 ml-1">Save 25%</span>
          </span>
        </div>
      </div>
{/* Pricing Cards */}
<div className="bg-[#FAFAFA] grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch text-center px-4 md:px-0">
  {/* Free Plan */}
  <div className="p-8 border border-gray-300 rounded-2xl shadow-md bg-white min-h-[450px]">
    <h3 className="text-xl font-bold text-black">FREE</h3>
    <p className="text-gray-500 mt-2">Organize across all apps by hand</p>
    <p className="text-4xl font-bold text-black mt-6">0$</p>
    <p className="text-gray-500">Per Month</p>
    <ul className="mt-8 space-y-4">
      <li className="flex items-center justify-center gap-2 text-green-500">
        <span>✔</span> Unlimited product updates
      </li>
      <li className="flex items-center justify-center gap-2 text-green-500">
        <span>✔</span> Customizable settings
      </li>
    </ul>
  </div>

  {/* Standard Plan */}
  <div className="p-8 border-2 border-blue-500 bg-[#252B42] rounded-2xl shadow-lg min-h-[450px]">
    <h3 className="text-xl font-bold text-white">STANDARD</h3>
    <p className="text-gray-300 mt-2">Organize across all apps by hand</p>
    <p className="text-4xl font-bold text-white mt-6">
      {isYearly ? '7.49$' : '9.99$'}
    </p>
    <p className="text-gray-300">Per Month</p>
    <ul className="mt-8 space-y-4">
      <li className="flex items-center justify-center gap-2 text-green-500">
        <span>✔</span> Unlimited product updates
      </li>
      <li className="flex items-center justify-center gap-2 text-green-500">
        <span>✔</span> Advanced analytics
      </li>
    </ul>
  </div>

  {/* Premium Plan */}
  <div className="p-8 border border-gray-300 rounded-2xl shadow-md bg-white min-h-[450px]">
    <h3 className="text-xl font-bold text-black">PREMIUM</h3>
    <p className="text-gray-500 mt-2">Organize across all apps by hand</p>
    <p className="text-4xl font-bold text-black mt-6">
      {isYearly ? '14.99$' : '19.99$'}
    </p>
    <p className="text-gray-500">Per Month</p>
    <ul className="mt-8 space-y-4">
      <li className="flex items-center justify-center gap-2 text-green-500">
        <span>✔</span> Unlimited product updates
      </li>
      <li className="flex items-center justify-center gap-2 text-green-500">
        <span>✔</span> Premium support
      </li>
    </ul>
  </div>
</div>


      {/* Footer Section */}
      <div className="text-center mt-12 text-gray-500">
        Trusted By Over 4000 Big Companies
      </div>
      <div className="flex justify-center mt-12">
        <img
          src="./Row.png"
          alt="Company Names"
          className="w-full h-28 object-cover"
        />
      </div>
    </section>
  );
};

export default Pricing;
