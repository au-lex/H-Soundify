import React from 'react';
import headphones from './Data'
import { FaShoppingCart } from 'react-icons/fa';
import { FaStar } from "react-icons/fa6";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeadphoneGallery = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Only animate once
    });
  }, []);
  return (
    <>

<header className="text-center py-8 px-[1rem]">
      <h1 className="text-4xl font-bold relative inline-block">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
          New Arrivals
        </span>
      </h1>
      <p className="text-gray-600 mt-2">Discover the latest products in our collection</p>
    </header>

<section className='flex flex-wrap justify-center'  >

{headphones.map((headphone) => (
  <div key={headphone.id} data-aos="fade-up" className='mx-4 my-4 w-[40%] bg-slate-50 pb-4 shadow-2xl md:w-[48%] lg:w-[48%] xl:w-[200px]'>
    <div className='relative  rounded-[10px]  '>
      <img
        src={headphone.imageUrl}
        alt={headphone.name}
        className='w-full h-[100px] object-contain  '
      />
      <div className='absolute top-0 right-0 p-2'>
        <button className='bg-orange-500 text-white px-2 py-1 rounded-md'>
          <FaShoppingCart className='mr-1' />
        </button>
      </div>
    </div>
    <div className='mt-4 px-2'>
      <h3 className='text-sm font-semibold text-gray-800'>{headphone.name}</h3>
      <div className='flex justify-between items-center mt-2'>
        <span className='text-sm font-bold'>${headphone.price.toFixed(2)}</span>
        <div className='flex space-x-1'>
          {[...Array(5)].map((star, i) => (
            <FaStar key={i} className='text-yellow-500 text-[10px]' />
          ))}
        </div>
      </div>
    </div>
  </div>
))}
</section>





    </>
  );
};

export default HeadphoneGallery;

