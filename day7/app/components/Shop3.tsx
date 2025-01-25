"use client"; // This marks the file as a Client Component

import React from "react";

const Shop3: React.FC = () => {
  return (
    <div className="p-4" >
       <h1 className="text-blond text-3xl font-bold mb-6">BESTSELLER PRODUCTS</h1>

      {/* Product Grid */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../plate17.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$22.99</span>
            <span className="text-lg font-semibold text-green-500">$15.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "red" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "blue" }}
            ></span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../cup28.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$25.99</span>
            <span className="text-lg font-semibold text-green-500">$18.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "green" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "yellow" }}
            ></span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../spoon3.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$30.00</span>
            <span className="text-lg font-semibold text-green-500">$22.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "purple" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "orange" }}
            ></span>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../cup4.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$20.00</span>
            <span className="text-lg font-semibold text-green-500">$12.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "black" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "white" }}
            ></span>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../bowl.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$27.99</span>
            <span className="text-lg font-semibold text-green-500">$19.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "blue" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "green" }}
            ></span>
          </div>
        </div>

        {/* Product 6 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../chair.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$35.00</span>
            <span className="text-lg font-semibold text-green-500">$25.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "red" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "purple" }}
            ></span>
          </div>
        </div>

        {/* Product 7 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../plate17.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$12.99</span>
            <span className="text-lg font-semibold text-green-500">$8.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "brown" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "black" }}
            ></span>
          </div>
        </div>

        {/* Product 8 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            src="../cup28.png"
            alt="Graphic Design"
            className="w-full h-83 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-medium text-gray-800 mt-4">Graphic Design</h3>
          <p className="text-sm text-gray-600">English Department</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">$18.99</span>
            <span className="text-lg font-semibold text-green-500">$14.99</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "blue" }}
            ></span>
            <span
              className="w-5 h-5 rounded-full border border-gray-400"
              style={{ backgroundColor: "white" }}
            ></span>
          </div>
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

export default Shop3;
