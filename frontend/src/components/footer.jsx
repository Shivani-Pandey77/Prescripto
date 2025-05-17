import React from 'react';
import { assets } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img src={assets.logo} alt="Prescripto Logo" className="h-8" />
            <p className="text-gray-600 mt-4 text-xl">
              Prescripto is a modern doctor appointment platform designed to connect patients with qualified healthcare professionals across various specialties. Our mission is to make healthcare more accessible, efficient, and personalized through easy online booking and trusted medical insights.
            </p>
          </div>

          {/* Company Section */}
          <div className="md:col-span-1">
            <h6 className="font-bold text-gray-700 text-2xl">Company</h6>
            <ul className="mt-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-xl">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-xl">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-xl">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-xl">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="md:col-span-1">
            <h6 className="font-bold text-gray-700 text-2xl">Get In Touch</h6>
            <ul className="mt-4">
              <li className="text-gray-600 text-2xl">+1-212-456-7890</li>
              <li className="text-gray-600 text-2xl">greatstackdev@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-xl">Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
