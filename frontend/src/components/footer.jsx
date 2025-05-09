import React from 'react';
import { assets } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img src={assets.logo} alt="Prescripto Logo" className="h-8" />
            <p className="text-gray-600 mt-4 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>

          {/* Company Section */}
          <div className="md:col-span-1">
            <h6 className="font-semibold text-gray-700">Company</h6>
            <ul className="mt-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="md:col-span-1">
            <h6 className="font-semibold text-gray-700">Get In Touch</h6>
            <ul className="mt-4">
              <li className="text-gray-600 text-sm">+1-212-456-7890</li>
              <li className="text-gray-600 text-sm">greatstackdev@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-xs">Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
