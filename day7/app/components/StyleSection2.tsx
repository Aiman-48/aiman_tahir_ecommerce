import React from 'react';

type Props = {};

const StyleSection2 = (props: Props) => {
  return (
    <div className="bg-[#F0F0F0] w-full h-auto">
      {/* New Section: What We Do */}
      <div className="bg-white py-12 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide">What We Do</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Innovation tailored for you</h2>
          <nav className="mt-4 text-gray-500">
            <span>Home</span> &gt; <span>Team</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 max-w-5xl mx-auto ">
          {/* Large Image */}
          <div className="col-span-1 md:col-span-2">
          <img
  src="../bigimg.png"
  alt="Large Feature Image"
  className="w-[90%] h-[90%] "
/>

          </div>
          {/* Smaller Images */}
          <div className="grid grid-cols-2 gap-2">
            <img
              src="../simg1.png"
              alt="Small Image 1"
              className="w-full h-48 object-cover"
            />
            <img
              src="../simg2.png"
              alt="Small Image 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="../simg3.png"
              alt="Small Image 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="../simg4.png"
              alt="Small Image 4"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSection2;
