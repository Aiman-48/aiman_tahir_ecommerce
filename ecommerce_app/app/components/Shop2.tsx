import React from "react";

const Shop2 = () => {
  return (
    <div className="w-full bg-gray-100 pb-8">
      <div className="w-full bg-gray-100 pb-8">
  {/* First Div */}
  <div className="bg-[#f6f6f6] p-6">
    <div className="flex justify-between items-center mb-6">
      {/* Heading on the Left */}
      <h1 className="text-2xl font-bold text-black">Shop</h1>
      
      {/* Navigation on the Right */}
      <div className="flex items-center text-sm space-x-2">
        <span className="text-black">Home</span>
        <span className="text-gray-400">&gt;</span>
        <span className="text-gray-400">Shop</span>
      </div>
    </div>
  </div>


  {/* Image Row */}
  <div className="grid grid-cols-5 gap-4">
          {["./black.png", "./blue.png", "./white.png", "./pink.png", "./purple.png"].map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={`/${image}`} // Image paths for the product images
                alt={`Item ${index + 1}`}
                className="w-full h-50 object-cover"
              />
         
            </div>
          ))}
        </div>
      </div>


      {/* Second Div */}
      <div className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="text-gray-500 text-sm">Showing all 12 results</div>
        <div className="flex items-center space-x-4">
          {/* View Options */}
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <button className="p-2 border rounded">🔳</button>
            <button className="p-2 border rounded">🔲</button>
          </div>
          {/* Dropdown */}
          <select className="border px-3 py-1 text-sm rounded">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
        </div>
      </div>

      {/* Third Div */}
      <div className="bg-[#f6f6f6] py-8 px-6">
        <div className="flex justify-center">
          
          <img
            src="../Row.png" 
            alt="Company Names"
            className="w-full h-28 object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Shop2;
