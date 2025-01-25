'use client';
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black w-full py-8">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Light Gray Header Section */}
        <div className="bg-[#f5f5f5] flex justify-between items-center px-6 py-4 mb-8">
          <h3 className="text-gray-700 font-bold text-3xl">Bandage</h3>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={28} /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaInstagram size={28} /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaTwitter size={28} /></a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-10 mb-6">
          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-gray-700">Company Info</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Carrier</a></li>
              <li><a href="#" className="hover:underline">We are hiring</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-700">Legal</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Carrier</a></li>
              <li><a href="#" className="hover:underline">We are hiring</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-700">Features</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:underline">Business Marketing</a></li>
              <li><a href="#" className="hover:underline">User Analytics</a></li>
              <li><a href="#" className="hover:underline">Live Chat</a></li>
              <li><a href="#" className="hover:underline">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-700">Resources</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:underline">IOS & Android</a></li>
              <li><a href="#" className="hover:underline">Watch a Demo</a></li>
              <li><a href="#" className="hover:underline">Customers</a></li>
              <li><a href="#" className="hover:underline">API</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold text-gray-700">Get In Touch</h4>
            <div className="space-y-3">
              {/* Wider Email Input */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-[95%] h-12 px-4 text-base text-gray-700 bg-gray-100 border border-gray-300 focus:outline-none"
              />
              {/* Wider Subscribe Button */}
              <button className="w-[95%] h-12 text-base font-bold text-white bg-blue-600 border border-blue-600">
                Subscribe
              </button>
            </div>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Section */}
        <p className="text-center text-sm text-gray-500 mt-6 bg-[#f5f5f5] py-3">
          Made With Love By Finland All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
