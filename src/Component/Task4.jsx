// Footer.js

import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12 px-6" data-aos="fade-up">
      <div
        className="container mx-auto flex flex-col lg:flex-row justify-between items-center"
        data-aos="fade-up"
      >
        <div className="mb-8 lg:mb-0" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <p className="text-gray-400">Email: info@headphones.com</p>
          <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
        </div>

        <div className="mb-8 lg:mb-0" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
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

        <div className="flex space-x-4" data-aos="fade-up">
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

      <div className="mt-8 text-center" data-aos="fade-up">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400">Get updates on the latest headphones and promotions.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center" data-aos="fade-up">
          <input
            type="email"
            placeholder="Your email address"
            className="py-2 px-4 w-full lg:mr-2 text-gray-900 rounded-md focus:outline-none mb-4 lg:w-60%"
          />
          <button
            className="bg-blue-500 text-white py-2 lg:py-0 lg:h-[45px] px-6 rounded-md hover:bg-blue-600 focus:outline-none"
            data-aos="fade-up"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-12 text-center" data-aos="fade-up">
        <p className="text-gray-400">&copy; 2023 Headphones Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
