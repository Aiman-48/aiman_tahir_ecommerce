'use client'; 
import React, { useState } from "react";


// components/Products.tsx
interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: {
    asset: {
      url: string;
    };
  };
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
}

const Products = ({ products }: { products: Product[] }) => {
  const [readMore, setReadMore] = useState<string | null>(null);

  const handleReadMore = (id: string) => {
    setReadMore(readMore === id ? null : id); // Toggle the "read more" state
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src={product.productImage.asset.url}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
            loading="lazy" // Lazy load images for better performance
          />
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">
              {readMore === product._id
                ? product.description
                : `${product.description.slice(0, 100)}...`}
            </p>
            <button
              onClick={() => handleReadMore(product._id)}
              className="text-blue-500 hover:text-blue-700 transition duration-200 mb-4"
            >
              {readMore === product._id ? "Show Less" : "Read More"}
            </button>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <p className="text-lg font-bold text-gray-800">${product.price}</p>
              {product.discountPercentage && (
                <span className="text-red-500 font-semibold">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1 absolute top-4 right-4">
                New
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
