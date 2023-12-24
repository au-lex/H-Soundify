import React from 'react';
import FeatureData from './Feature';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaShoppingBag } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Task3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Only animate once
    });
  }, []);
  return (
    <div>
      <main className=' lg:px-[4rem]'>
      <header className="text-center py-8 px-[1rem]">
      <h1 className="text-4xl font-bold relative inline-block">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Features Products
        </span>
      </h1>
      <p className="text-gray-600 mt-2">Discover the latest products in our collection</p>
    </header>
        <section className='justify-center flex flex-wrap'>
  {FeatureData.map((fxt, idx) => {
    return (
      <div data-aos="fade-up" 
        className="fxtCon lg:w-[18%] w-[40%] my-4 pb-4 
        border border-gray-300  rounded-[10px] mx-2
         overflow-hidden transition-transform transform hover:scale-105 relative"
        key={idx}
      >
        <span className='flex justify-between p-2 absolute top-2 right-2'>
          <p
            className={`${
              fxt.inStock
                ? 'text-green-500 text-[12px] bg-green-100'
                : 'text-red-500 bg-red-200 text-[10px]'
            } rounded px-2`}
          >
            {fxt.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          {fxt.inStock ? (
            <FaHeart className='text-red-500' />
          ) : (
            <FaRegHeart className='text-red-500 bg-white' />
          )}
        </span>
        <div className='w-full h-[120px] lg:p-0 flex justify-center items-center'>
          <img src={fxt.imgUrl} alt={fxt.name} className='max-h-full max-w-full object-cover' />
        </div>
        <div className='px-[1rem]'>
          <div className='flex justify-between items-center mt-2'>
            <div>
              <div className='flex space-x-1 my-1'>
                {[...Array(5)].map((star, i) => (
                  <FaStar key={i} className='text-yellow-500 text-[10px]' />
                ))}
              </div>
              <p className='text-sm font-bold'>${fxt.price}</p>
            </div>
            <FaShoppingBag className='text-red-500 text-[1.2rem]' />
          </div>
          <p className='mt-0 text-sm'>{fxt.name}</p>
        </div>
      </div>
    );
  })}
</section>

      </main>
    </div>
  );
};

export default Task3;
