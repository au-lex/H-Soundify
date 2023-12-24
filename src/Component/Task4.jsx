// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-xl  mb-2">Connect With Us</h2>
          <p>Email: info@headphones.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="  mb-1">Quick Links</h2>
          <ul>
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-blue-500">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className=" ">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="mb-4">
          <h2 className="text-xl  mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400">Get updates on the latest headphones and promotions.</p>
        </div>
  
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 Headphones Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
