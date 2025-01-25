'use client';
import React, { useState } from 'react';
import { useCart } from '../../../contexts/cartContexts';
import { useRouter } from 'next/navigation'; // For navigation

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart(); // Using removeFromCart for individual item removal
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    email: '',
  });
  const router = useRouter();

  // Handle input changes for billing details
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  // Handle place order (this will be replaced by payment logic later)
  const handlePlaceOrder = () => {
    // Simulate order placement (you could connect to an API here)
    console.log('Order placed:', { billingDetails, cart });

    // Redirect to an order confirmation page
    router.push('/order-confirmation'); // Adjust to your order confirmation page
  };

  const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Checkout</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700" htmlFor="name">
              Full Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={billingDetails.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700" htmlFor="address">
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={billingDetails.address}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={billingDetails.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-6 text-lg font-semibold text-gray-800">
            <p>Total: <span className="font-bold">${total.toFixed(2)}</span></p>
          </div>

          {/* Cart Items for Checkout */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart Items:</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4 p-4 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image || '/placeholder.png'}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">Size: {item.size} | Color: {item.color}</p>
                    <p className="text-lg font-semibold">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
