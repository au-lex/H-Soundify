import React, { useEffect, useState } from 'react';
import headphones from './Data';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeadphoneGallery = ( {prod, addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
  };



  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <>
      <header className="text-center py-8 px-[1rem]">
        <h1 className="text-2xl font-bold relative inline-block">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            New Arrival
          </span>
        </h1>
        <p className="text-gray-600 mt-2">Discover the latest products in our collection</p>
      </header>

      <section className="flex flex-wrap justify-center">
        {headphones.map((headphone) => (
          <div key={headphone.id} data-aos="fade-up" className="mx-4 my-4 w-[40%]
           bg-slate-50 pb-4 shadow-2xl md:w-[28%] lg:w-[48%] xl:w-[200px]">
            <div className="relative rounded-[10px]">
              <img
                src={headphone.imgUrl}
                alt={headphone.name}
                className="w-full h-[100px] object-contain cursor-pointer"
                onClick={() => openModal(headphone.imgUrl)}
              />
              <div className="absolute top-0 right-0 p-2">
                <button  onClick={() => addToCart(headphone)} 
                   className="bg-orange-500 text-white px-2 py-1 rounded-md">
                  <FaShoppingCart className="mr-1" />
                </button>
              </div>
            </div>
            <div className="mt-4 px-2">
              <h3 className="text-sm font-semibold text-gray-800">{headphone.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm font-bold">${headphone.price.toFixed(2)}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((star, i) => (
                    <FaStar key={i} className="text-yellow-500 text-[10px]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {selectedImage && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center
         bg-black bg-opacity-75 transition-opacity duration-800">
          <div className="max-w-screen-lg w-full lg:w-[40%] md:w-[40%] mx-4 p-4 bg-white rounded-md relative">
            <img src={selectedImage} data-aos="fade-up" alt="Enlarged" className="w-full h-auto lg:w-[400px]" />
            <button className="absolute top-0 right-0 p-2 text-white" onClick={closeModal}>
              <RiCloseCircleFill className="text-[2rem] text-red-500" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeadphoneGallery;
