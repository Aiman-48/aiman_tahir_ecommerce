'use client';

import React from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

// Make sure to use your actual publishable key here
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY'); // Replace with your own publishable key

interface StripeCheckoutButtonProps {
  amount: number;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ amount }) => {
  const handleCheckout = async () => {
    // Call the API to create a Checkout Session and get the sessionId
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const session = await response.json();

    const stripe: Stripe | null = await stripePromise;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error during checkout:', error);
      }
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-blue-500 text-white py-2 px-4 rounded-full"
    >
      Checkout Now
    </button>
  );
};

export default StripeCheckoutButton;
