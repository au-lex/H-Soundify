// components/ContactMe.js







// components/AboutUs.js

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Task4 from '../Component/Task4';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaHeadphonesAlt } from "react-icons/fa";

const  ContactMe= () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    // Simulate a loading delay (you can replace this with an actual loading process)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    // Return a loader or loading indicator while the content is loading
    return (
        <div className="flex items-center flex-col justify-center h-screen bg-gray-900">
        <div className="  animate-bounce rounded-full w-[100px] h-[100px] ">

          <img src="https://fullkit.moxcreative.com/audioplus/wp-content/uploads/sites/25/2023/07/img_7.png" alt="" />
        </div>

        <h1 className="text-2xl font-bold relative inline-block mt-[4rem]">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            SoundIt.io
          </span>
        </h1>
      </div>
    );
  }

  return (
    <section className="px-4 bg-gray-900 font-normal pt-4 text-white h-[100vh]" data-aos="fade-up">
                <div className='flex justify-between mb-[2rem]'>

<Link to={'/'}>
<IoArrowBackCircleSharp className='text-[2rem]' />
</Link>
<div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex text-transparent  text-[1.5rem] font-bold bg-clip-text">
    <span> <FaHeadphonesAlt className='text-[2rem]
text-red-600 mr-4' /></span>Soundify</div>

</div>
     
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-8 text-center">
          Have a question or just want to say hello? Feel free to reach out to us!
        </p>
        <form className="max-w-md w-full">
          <div className="mb-4" data-aos="fade-up">
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
          <div className="mb-4" data-aos="fade-up">
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
          <div className="mb-4" data-aos="fade-up">
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

