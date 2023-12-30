// components/ContactMe.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ContactMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="px-2 bg-gray-900 font-normal pt-4 text-white h-[100vh]">
        <Link to={'/'}>
        <IoArrowBackCircleSharp className='text-[2rem]' />
        </Link>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <p className="text-lg leading-relaxed mb-8 text-center">
          Have a question or just want to say hello? Feel free to reach out to us!
        </p>
        <form className="max-w-md w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full text-white bg-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full text-white bg-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full text-white bg-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
