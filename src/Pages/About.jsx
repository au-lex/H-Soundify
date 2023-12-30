// components/AboutUs.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Task4 from '../Component/Task4';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaHeadphonesAlt } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="px-4 bg-gray-900 font-normal pt-4 overflow-x-hidden text-white">
        <div className='flex justify-between'>

        <Link to={'/'}>
        <IoArrowBackCircleSharp className='text-[2rem]' />
        </Link>
<div className="logo flex  text-rose-100 text-[1.5rem] font-bold"><span> <FaHeadphonesAlt className='text-[2rem]
 text-red-600 mr-4' /></span>Soundify</div>
      
 </div>
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl mt-6 font-bold mb-8 text-center" data-aos="fade-up">
          Welcome to Soundify
        </h2>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <img
              className="object-cover w-full lg:w-[400px] h-[350px] lg:h-[400px] rounded-lg shadow-md border-4 border-gray-600"
              src="https://fullkit.moxcreative.com/audioplus/wp-content/uploads/sites/25/2023/07/img_7.png"
              alt="Soundify Design Team"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
            <p className="text-sm leading-relaxed mb-4 font-normal text-slate-300 " data-aos="fade-up">
              Immerse yourself in the symphony of Soundify Design, where innovation meets
              audio artistry.
            </p>
            <p className="text-sm leading-relaxed mb-4 font-normal text-slate-300 " data-aos="fade-up">
              Our headphones aren't just products; they're masterpieces meticulously crafted
              for audio aficionados like you.
            </p>
            <p className="text-sm leading-relaxed mb-4 font-normal text-slate-300 " data-aos="fade-up">
              Feel the rhythm, experience the beats, and let our designs transport you to a
              world where sound becomes an emotion.
            </p>
            <p className="text-sm text-slate-300 font-normal leading-relaxed mb-4" data-aos="fade-up">
              Join us on this extraordinary journey, where every note is a brushstroke
              painting a canvas of unparalleled sonic bliss.
            </p>
          </div>
        </div>
      </div>
      <Task4 />
    </section>
  );
};

export default AboutUs;
