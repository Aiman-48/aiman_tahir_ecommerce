'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // For navigating to the cart page
import { useCart } from '../../contexts/cartContexts'; // Import the useCart hook from the CartContext

export const HeroSection3 = () => {
  const { addToCart } = useCart(); // Get the addToCart function from CartContext
  const router = useRouter(); // Use router for navigation
  const [notification, setNotification] = React.useState<string | null>(null); // State for notification

  const product = {
    _id: 'product-id-456', // Example product ID, replace with actual data
    title: 'Part Of The Neural Universe',
    price: 25.99,
    image: '../hero3.png',
    quantity: 1, // Default quantity
  };

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    setNotification(`${product.title} added to cart!`); // Show notification
    setTimeout(() => setNotification(null), 3000); // Remove notification after 3 seconds
  };

  const handleBuyNow = () => {
    addToCart(product); // Add the product to the cart
    router.push('/pages/cart'); // Navigate to the cart page
  };

  return (
    <section className="relative w-full justify-evenly bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-[6fr,6fr] place-items-center">
      {/* Image Section */}
      <div className="flex w-full top-0 m-0 p-0">
        <img
          src={product.image}
          alt="Fashion"
          className="h-auto w-auto rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-start justify-center p-6 relative space-y-10 md:space-y-12">
        <p className="text-gray-500 text-base md:text-lg mb-6">SUMMER COLLECTION 2020</p>
        <h1 className="text-4xl font-extrabold text-black tracking-tighter leading-tight">
          Part Of The Neural <br /> Universe
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-6">
          We know how large objects will act, We know <br /> how our objects will act, We know.
        </p>

        <div className="flex items-center justify-between gap-x-4 mb-6">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart} // Trigger the addToCart function and notification
            className="flex-1 flex items-center justify-center px-6 py-3 h-12 text-white text-lg font-medium rounded-none bg-[#70db70] hover:bg-[#5db85d] transition leading-none whitespace-nowrap"
          >
            Add to Cart
          </button>

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow} // Trigger the addToCart function and navigate to cart
            className="flex-1 flex items-center justify-center px-6 py-3 h-12 text-[#70db70] text-lg font-medium rounded-none border-2 border-[#70db70] bg-transparent hover:bg-[#e8f8e8] transition"
          >
            Buy Now
          </button>
        </div>
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

export default HeroSection3;
