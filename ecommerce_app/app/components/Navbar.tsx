'use client';
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaSearch, FaShoppingCart, FaUserCircle, FaHeart, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Detect current route

  // Determine navbar background color based on route
  const getNavbarBackground = () => {
    switch (pathname) {
      case "/":
        return "bg-[#0B2545]"; // Navy blue for the home page
        case "/shop":
        return "bg-[#23856D]"; // Green for another page
        case "/shop3":
          return "bg-[#23856D]"; // Green for another page
      default:
        return "bg-white"; // Default white background
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = () => {
    // Example functionality for search
    alert("Search functionality to be implemented");
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`${getNavbarBackground()} text-white text-sm h-16`}>
        <div className="container mx-auto flex justify-between items-center h-full py-0 px-4">
          {/* Left Section: Contact Info */}
          <div className="flex items-center space-x-4">
            <span>(225) 555-0118</span>
            <span>michelle.rivera@example.com</span>
          </div>

          {/* Middle Section: Follow Us */}
          <div className="flex items-center">
            <span className="mr-2">Follow Us and get a chance to win 80% off</span>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex space-x-4">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* Left Section: Logo */}
          <div className="text-black text-2xl font-extrabold">
            <a href="/">Bandage</a>
          </div>

          {/* Middle Section: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-black hover:text-gray-600 transition">
              Home
            </Link>
            <Link href="/shop" className="text-black hover:text-gray-600 transition">
  Shop
</Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition">
              About
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600 transition">
              Blog
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition">
              Contact
            </Link>
          </div>

          {/* Right Section: Icons */}
          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <FaUserCircle className="text-blue-500 h-5 w-5 cursor-pointer" />

            {/* Login / Register */}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
            <span className="text-blue-500">/</span>
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>

            {/* Search Icon */}
            <FaSearch className="text-blue-500 h-5 w-5 cursor-pointer" onClick={handleSearch} />

            {/* My Cart */}
            <Link href="/cart" className="text-blue-500">
              <FaShoppingCart className="h-5 w-5 cursor-pointer" />
            </Link>

            {/* Wishlist */}
            <FaHeart className="text-blue-500 h-5 w-5 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-white">
            <Link href="/" className="text-black hover:text-gray-600 transition">
              Home
            </Link>
            <Link href="/shop" className="text-black hover:text-gray-600 transition">
  Shop
</Link>



            <Link href="/about" className="text-black hover:text-gray-600 transition">
              About
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600 transition">
              Blog
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};





