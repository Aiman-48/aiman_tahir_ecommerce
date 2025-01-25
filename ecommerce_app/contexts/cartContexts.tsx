'use client';

import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image?: string;
  size?: string;
  color?: string;
  quantity?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  notification: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // Add to Cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity =
          (updatedCart[existingItemIndex].quantity || 1) + 1;
        return updatedCart;
      }

      // If the item does not exist, add it to the cart
      return [...prevCart, { ...item, quantity: 1 }];
    });

    // Set notification
    // setNotification(`${item.title} added to cart!`);
    // setTimeout(() => setNotification(null), 3000);
  };

  // Remove from Cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update Quantity
  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, notification }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
// 'use client';

// import React, { createContext, useContext, useState } from 'react';

// interface CartItem {
//   id: string; // Ensures `id` is a string
//   title: string;
//   price: number;
//   image?: string;
//   size?: string;
//   color?: string;
//   quantity?: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   notification: string | null;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([]); // Cart items state
//   const [notification, setNotification] = useState<string | null>(null); // Notification state

//   // Add item to cart
//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);

//       if (existingItemIndex !== -1) {
//         // If item exists, increase quantity
//         const updatedCart = [...prevCart];
//         updatedCart[existingItemIndex].quantity =
//           (updatedCart[existingItemIndex].quantity || 1) + 1;
//         return updatedCart;
//       }

//       // Add new item to cart
//       return [...prevCart, { ...item, quantity: 1 }];
//     });

//     // Display notification
//     setNotification(`${item.title} added to cart!`);
//     setTimeout(() => setNotification(null), 3000);
//   };

//   // Remove item from cart
//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Update item quantity
//   const updateQuantity = (id: string, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity, notification }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
