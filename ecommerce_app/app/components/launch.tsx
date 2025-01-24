'use client';
import React from "react";

export const Launch = () => {
  return (
    <section className="relative w-full bg-white p-8 grid grid-cols-1 md:grid-cols-[3fr,4fr,4fr] gap-8">
      {/* Tabs Section */}
      <div className="col-span-full flex justify-center items-center w-full border-b border-gray-300 pb-4 gap-8">
        <button className="text-gray-500 hover:text-gray-700 px-4">
          Description
        </button>
        <button className="text-gray-500 hover:text-gray-700 px-4">
          Additional Information
        </button>
        <button className="text-gray-500 hover:text-gray-700 px-4">
          Reviews (0)
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          src="../launch.png"
          alt="Product Display"
          className="rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-lg font-bold text-gray-800">
          the quick fox jumps over
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>

      {/* Right Column */}
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-800">
            the quick fox jumps over
          </h3>
          <ul className="text-gray-600 leading-relaxed list-none space-y-1">
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-800">
            the quick fox jumps over
          </h3>
          <ul className="text-gray-600 leading-relaxed list-none space-y-1">
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
            <li>&rsaquo; the quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Launch;
