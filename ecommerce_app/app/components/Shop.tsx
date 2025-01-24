"use client"; // This marks the file as a Client Component

import React, { useState } from "react";

// Define the ProductCardProps interface (just for reference, since it's not needed now)
interface ProductCardProps {
  id: number;
  images: string[];
  title: string;
  price: number;
  originalPrice: number;
  category: string;
  colors: string[];
}

const Shop: React.FC = () => {
  // Hardcode the 8 products directly in the component
  const products: ProductCardProps[] = [
    {
      id: 1,
      images: ['../men2.png'],
      title: 'Graphic Design',
      price: 15.99,
      originalPrice: 22.99,
      category: 'English Department',
      colors: ['red', 'blue'],
    },
    {
      id: 2,
      images: ['../women2.png'],
      title: 'Graphic Design',
      price: 18.99,
      originalPrice: 25.99,
      category: 'English Department',
      colors: ['green', 'yellow'],
    },
    {
      id: 3,
      images: ['../framee3.png'],
      title: 'Graphic Design',
      price: 22.99,
      originalPrice: 30.00,
      category: 'English Department',
      colors: ['purple', 'orange'],
    },
    {
      id: 4,
      images: ['../framee4.png'],
      title: 'Graphic Design',
      price: 12.99,
      originalPrice: 20.00,
      category: 'English Department',
      colors: ['black', 'white'],
    },
    {
      id: 5,
      images: ['../framee5.png'],
      title: 'Graphic Design',
      price: 19.99,
      originalPrice: 27.99,
      category: 'English Department',
      colors: ['blue', 'green'],
    },
    {
      id: 6,
      images: ['../framee6.png'],
      title: 'Graphic Design',
      price: 25.99,
      originalPrice: 35.00,
      category: 'English Department',
      colors: ['red', 'purple'],
    },
    {
      id: 7,
      images: ['../framee7.png'],
      title: 'Graphic Design',
      price: 8.99,
      originalPrice: 12.99,
      category: 'English Department',
      colors: ['brown', 'black'],
    },
    {
      id: 8,
      images: ['../framee8.png'],
      title: 'Graphic Design',
      price: 10.99,
      originalPrice: 15.99,
      category: 'English Department',
      colors: ['yellow', 'blue'],
    },
    {
      id: 9,
      images: ['../framee9.png'],
      title: 'Graphic Design',
      price: 10.99,
      originalPrice: 15.99,
      category: 'English Department',
      colors: ['yellow', 'blue'],
    },
    {
      id: 10,
      images: ['../framee10.png'],
      title: 'Graphic Design',
      price: 10.99,
      originalPrice: 15.99,
      category: 'English Department',
      colors: ['yellow', 'blue'],
    },
    {
      id: 11,
      images: ['../framee11.png'],
      title: 'Graphic Design',
      price: 10.99,
      originalPrice: 15.99,
      category: 'English Department',
      colors: ['yellow', 'blue'],
    },
    {
      id: 12,
      images: ['../framee12.png'],
      title: 'Graphic Design',
      price: 10.99,
      originalPrice: 15.99,
      category: 'English Department',
      colors: ['yellow', 'blue'],
    },
  ];

  return (
    <div className="p-4">
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.images && product.images.length > 0 ? product.images[0] : '/default-image.jpg'}
              alt={product.title}
              className="w-full h-83 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-medium text-gray-800 mt-4">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-lg font-semibold text-green-500">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="mt-2 flex gap-2">
              {product.colors && product.colors.length > 0 ? (
                product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-5 h-5 rounded-full border border-gray-400`}
                    style={{ backgroundColor: color }}
                  ></span>
                ))
              ) : (
                <span>No colors available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
