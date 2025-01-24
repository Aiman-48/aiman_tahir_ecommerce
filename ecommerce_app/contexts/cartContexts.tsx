
// 'use client';
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// type Product = {
//   id?: number | null;
//   image: string;
//   title: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   originalPrice?: number | null | undefined;
//   discount?: number | null;
//   category?: string;
//   quantity?: number | null;
//   size?: string | null;
//   color?:string | null;



 
// };

// type CartContextType = {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: any) => void;
//   updateQuantity: (id: any, quantity: number) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // Updated addToCart function to add a new instance of the product every time
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]); // Adds a new instance of the product with quantity 1
//   };

//   const removeFromCart = (id: any) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: any, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error('useCart must be used within a CartProvider');
//   return context;
// };

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
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add to Cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      }

      // Otherwise, add the new item to the cart
      return [...prevCart, { ...item, quantity: 1 }];
    });
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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
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
