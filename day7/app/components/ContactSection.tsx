'use client';
import React from 'react';

export const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h3 className="text-gray-500 uppercase tracking-wide text-sm">Visit Our Office</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          We help small businesses <br /> with big ideas
        </h1>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Card */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center min-h-[450px]">
          <div className="mb-4 text-4xl text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 5a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"
              />
            </svg>
          </div>
          <p className="text-gray-700 text-lg text-center font-medium mb-4">
            georgia.young@example.com <br />
            georgia.young@example.com
          </p>
          <span className="text-gray-700 text-lg text-center font-medium mb-4">
            Get SUPPORT
          </span>
          <button className="mt-auto px-6 py-3 bg-blue-500 text-white rounded-full flex items-center gap-2">
            Submit Request
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Location Card */}
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg flex flex-col items-center min-h-[450px]">
          <div className="mb-4 text-4xl text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2c1.657 0 3 1.343 3 3v12c0 1.657-1.343 3-3 3s-3-1.343-3-3V5c0-1.657 1.343-3 3-3z"
              />
            </svg>
          </div>
          <p className="text-gray-700 text-lg text-center font-medium mb-4">
            georgia.young@example.com <br />
            georgia.young@example.com
          </p>
          <span className="text-gray-700 text-lg text-center font-medium mb-4">
            Get SUPPORT
          </span>
          <button className="mt-auto px-6 py-3 bg-blue-500 text-white rounded-full flex items-center gap-2">
            Submit Request
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Email Card */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center min-h-[450px]">
          <div className="mb-4 text-4xl text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2c1.657 0 3 1.343 3 3v12c0 1.657-1.343 3-3 3s-3-1.343-3-3V5c0-1.657 1.343-3 3-3z"
              />
            </svg>
          </div>
          <p className="text-gray-700 text-lg text-center font-medium mb-4">
            georgia.young@example.com <br />
            georgia.young@example.com
          </p>
          <span className="text-gray-700 text-lg text-center font-medium mb-4">
            Get SUPPORT
          </span>
          <button className="mt-auto px-6 py-3 bg-blue-500 text-white rounded-full flex items-center gap-2">
            Submit Request
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Arrow Separator */}
      <div className="flex justify-center my-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v14m7-7H5"
          />
        </svg>
      </div>

      {/* Let's Talk Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Let's Talk</h2>
        <p className="text-gray-700 mb-6">We can not wait to meet you</p>
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-full flex items-center gap-2">
            try it for free now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
