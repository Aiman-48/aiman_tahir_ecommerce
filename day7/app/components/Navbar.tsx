'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaHeart,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../../contexts/cartContexts"; // Import the useCart hook

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart(); // Access the `cart` from CartContext
  const pathname = usePathname(); // Detect current route

  // Calculate cart count dynamically
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  const getNavbarBackground = () => {
    switch (pathname) {
      case "/":
        return "bg-[#0B2545]";
      case "/shop":
      case "/shop3":
        return "bg-[#23856D]";
      default:
        return "bg-white";
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = () => {
    alert("Search functionality to be implemented");
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`${getNavbarBackground()} text-white text-sm h-16`}>
        <div className="container mx-auto flex justify-between items-center h-full py-0 px-4">
          <div className="flex items-center space-x-4">
            <span>(225) 555-0118</span>
            <span>michelle.rivera@example.com</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex space-x-4">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-white shadow mb-0">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="text-black text-2xl font-extrabold">
            <a href="/">Bandage</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-500 hover:text-gray-700 transition">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-500 hover:text-gray-700 transition">
                Shop
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-40">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      href="/pages/shop"
                      className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition text-center rounded-md"
                      style={{ height: "40px", lineHeight: "40px" }}
                    >
                      Shop 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/shop3"
                      className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition text-center rounded-md"
                      style={{ height: "40px", lineHeight: "40px" }}
                    >
                      Shop 2
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/pages/about" className="text-gray-500 hover:text-gray-700 transition">
              About
            </Link>
            <Link href="/pages/pricing" className="text-gray-500 hover:text-gray-700 transition">
              Pricing
            </Link>
            <Link href="/pages/contact" className="text-gray-500 hover:text-gray-700 transition">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-blue-500 h-5 w-5 cursor-pointer" />
            <Link href="/auth/login" className="text-blue-500 hover:underline">
              Login
            </Link>
            <span className="text-blue-500">/</span>
            <Link href="/auth/signup" className="text-blue-500 hover:underline">
              Register
            </Link>
            <FaSearch className="text-blue-500 h-5 w-5 cursor-pointer" onClick={handleSearch} />
            <Link href="/pages/cart" className="relative">
              <FaShoppingCart className="text-blue-500 h-5 w-5 cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <FaHeart className="text-blue-500 h-5 w-5 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-white">
            <Link href="/" className="text-black hover:text-gray-600 transition">
              Home
            </Link>
            <Link href="/pages/shop" className="text-black hover:text-gray-600 transition">
              Shop
            </Link>
            <Link href="/pages/about" className="text-black hover:text-gray-600 transition">
              About
            </Link>
            <Link href="/pages/blog" className="text-black hover:text-gray-600 transition">
              Blog
            </Link>
            <Link href="/pages/contact" className="text-black hover:text-gray-600 transition">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};
