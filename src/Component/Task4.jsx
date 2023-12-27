import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container  flex flex-col lg:flex-row justify-between
       ">
        <div className="mb-[4rem] lg:mb-0">
          <h2 className="text-xl font-meduim  mb-2">Connect With Us</h2>
          <p className="text-gray-400">Email: info@headphones.com</p>
          <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
        </div>

        <div className="mb-2 lg:mb-0">
          <h2 className="text-xl font-meduim mb-2">Quick Links</h2>
          <ul className="list-none">
            <li>
              <a href="#home" className="text-gray-400 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-400 hover:text-blue-500">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex  lg:items-start">

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

      <div className="mt-[3.8rem] text-center">
        <div className="mb-2">
          <h2 className="text-xl font-meduim mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400">Get updates on the latest headphones and promotions.</p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:mt-[2rem]  lg:justify-center ">
          <input
            type="email"
            placeholder="Your email address"
            className="py-2 px-4  w-full lg:mr-[2rem] text-gray-900  rounded-md  lg:w-[60%] focus:outline-none mb-4"
          />
          <button className="bg-blue-500 text-white py-2 lg:py-0 lg:h-[45px] px-6 
          rounded-md hover:bg-blue-600 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400">&copy; 2023 Headphones Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
