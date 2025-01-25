'use client';
import React from 'react';
import { useCart } from '../../contexts/cartContexts'; // Import the useCart hook from the CartContext

export const HeroSection2 = () => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext
  const [notification, setNotification] = React.useState<string | null>(null); // State for notification

  const product = {
    _id: '/product-id-123', // Example product ID, replace with actual data
    title: 'Vita Classic Product',
    price: 16.48,
    image: '../hero2.png',
    quantity: 1, // Default quantity
  };

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart when the button is clicked
    setNotification(`${product.title} added to cart!`); // Set notification message
    setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
  };

  return (
    <section className="relative w-full justify-evenly bg-[#23856D] grid grid-cols-1 md:grid-cols-[6fr,6fr] place-items-center">
      {/* Text Section */}
      <div className="flex flex-col items-start justify-center p-6 relative space-y-10 md:space-y-12">
        <p className="text-white text-base md:text-lg mb-6">SUMMER COLLECTION 2020</p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight">
          VITA CLASSIC <br /> PRODUCT
        </h1>
        <p className="text-white text-base md:text-lg mb-6">
          We know how large objects will act, We know <br /> how our objects will act, We know.
        </p>

        <div className="flex items-center justify-between gap-x-6 mb-6">
          {/* Price */}
          <span className="text-gray-800 text-lg font-semibold">${product.price.toFixed(2)}</span>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart} // Trigger the addToCart function when clicked
            className="px-6 py-3 bg-[#70db70] w-full sm:w-[100%] text-white text-lg font-medium rounded-none hover:bg-[#5db85d] transition"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex w-full top-0 m-0 p-0">
        <img
          src={product.image}
          alt="Fashion"
          className="h-auto w-auto rounded-lg"
        />
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition">
          {notification}
        </div>
      )}
    </section>
  );
};

export default HeroSection2;
