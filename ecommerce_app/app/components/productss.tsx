'use client';
import React, { useState, createContext, useContext } from 'react';

// Cart Context for Global State Management
interface CartProduct {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product._id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Product Component
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
  const { addToCart } = useCart();
  const [readMore, setReadMore] = useState<string | null>(null);

  const handleReadMore = (id: string) => {
    setReadMore(readMore === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          {/* Product Image */}
          <img
            src={product.productImage.asset.url}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
            loading="lazy"
          />

          {/* Product Details */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              {readMore === product._id
                ? product.description
                : `${product.description.slice(0, 100)}...`}
            </p>

            {/* Read More / Show Less Button */}
            {product.description.length > 100 && (
              <button
                onClick={() => handleReadMore(product._id)}
                className="text-blue-500 hover:text-blue-700 transition duration-200 mb-4"
              >
                {readMore === product._id ? 'Show Less' : 'Read More'}
              </button>
            )}

            {/* Price and Discount */}
            <div className="flex justify-center items-center space-x-4 mt-4">
              <p className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</p>
              {product.discountPercentage > 0 && (
                <span className="text-red-500 font-semibold">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>

            {/* New Badge */}
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                New
              </span>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={() =>
                addToCart({
                  _id: product._id,
                  title: product.title,
                  price: product.price,
                  image: product.productImage.asset.url,
                  quantity: 1,
                })
              }
              className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Cart Display Component
const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>;
  }

  return (
    <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item._id} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
            <p className="text-gray-800 font-semibold">${item.price.toFixed(2)}</p>
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={clearCart}
        className="mt-6 bg-red-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-red-600 transition duration-200"
      >
        Clear Cart
      </button>
    </div>
  );
};

// App Wrapper
const App = ({ products }: { products: Product[] }) => {
  return (
    <CartProvider>
      <Products products={products} />
      <Cart />
    </CartProvider>
  );
};

export default App;
