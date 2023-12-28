import React, { useState } from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseCircleFill } from 'react-icons/ri';
import heroimg from '../Component/image 1.png'
import HeroSl from '../Component/HeroSl'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Task1 = ({cart, total,  removeFromCart,increaseQuantity, decreaseQuantity }) => {


  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Only animate once
    });
  }, []);

  const smallImages = [
    'https://fullkit.moxcreative.com/audioplus/wp-content/uploads/sites/25/2023/07/img_7.png',
    'https://res.cloudinary.com/durbee4ln/image/upload/v1703245863/FOOD_APP/HEADPHONE/headphones_b_3_aeymlf.webp',
    // 'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_a_3_inzztb.webp',
    'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_b_2_pcjguw.webp',
    'https://res.cloudinary.com/durbee4ln/image/upload/v1703245861/FOOD_APP/HEADPHONE/headphones_c_1_xgnsry.webp',
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);
    const openCart = () => {
        setIsCartOpen(!isCartOpen);
      };
 

  const [openbar, setOpenBar] = useState(false)
  const [selectedImage, setSelectedImage] = useState(smallImages[0]);
  const [showBigImage, setShowBigImage] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowBigImage(true);
  };

  const handleBigImageClose = () => {
    setShowBigImage(false);
  };

  const openBar = () => {
    setOpenBar(!openbar);
  }

  return (
    <>
 <HeroSl /> 

<main className=''>

  <section className='flex 
  justify-between z-50 pt-4 fixed w-full left-0 right-0 top-0  
    bg-gray-800   lg:px-[4rem] px-4 backdrop-blur-lg h-[4rem]'>
    
<div className="logo flex  text-rose-100 text-[1.5rem] font-bold"><span> <FaHeadphonesAlt className='text-[2rem]
 text-red-600 mr-4' /></span>Soundify</div>

 
<ol className=' text-slate-200  px-4 space-x-14 md:space-x-8 hidden lg:flex md:flex '>
  <li className='mb-[1rem] py-2'>Home</li>
  <li className='mb-[1rem] py-2 '>Product</li>
  <li className='mb-[1rem] py-2 '>About us</li>
  <li className='mb-[1rem] py-2 '>Contact us</li>
</ol>
<span className='flex space-x-4 text-slate-100'> 


<span className='relative' onClick={openCart}  >
              
              <IoMdCart   className='text-[1.8rem]
               text-slate-100 cursor-pointer'     />
            
            <span className='bg-red-500 top-0 pl-[8px] pt-[.5px] h-6 w-6 absolute rounded-full
             left-[-.8rem] text-white text-[14px]'>
             {cart.length}
            </span>
            </span>





<RiMenu4Line onClick={openBar} className='text-[1.8rem] lg:hidden md:hidden'   />
</span>
  </section>
  <div   className={`openMenu  w-full  top-[4rem]  lg:hidden md:hidden   ${openbar ? 'active' : ''} fixed
   right-0 z-50`}>

<ol className=' pt-[3rem] text-slate-200 text-center px-4 '>
  <li className='mb-[1rem] py-2 border'>Home</li>
  <li className='mb-[1rem] py-2 border'>Product</li>
  <li className='mb-[1rem] py-2 border'>About us</li>
  <li className='mb-[1rem] py-2 border'>Contact us</li>
</ol>


  
</div>

{isCartOpen && (
        <div
          className="bg-white min-h-[20rem] top-[4rem]   z-50 px-6 w-full fixed mb-[5rem] 
          act"
         
        > 
   <div className=''>
      <h1 className="text-xl font-meduim pt-4 mb-4">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">No items in the cart</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-[12px] font-meduim">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="text-gray-500 px-2 py-1 border border-gray-300 rounded"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="text-gray-500 px-2 py-1 border border-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(index)}
              
              >
                   <RiCloseCircleFill className="text-[2rem]  text-red-500" />
              </button>
            </li>
          ))}

{cart.length > 0 && (
        <p className="text-lg font-bold mt-4">Total: ${total.toFixed(2)}</p>

      )}
       <div className="btnn pb-[2rem]">
  <button className="bg-orange-500 rounded-[10px] text-white w-full p-3 transition duration-300 ease-in-out hover:bg-orange-700">
    Checkout
  </button>
</div>

        </ul>
      )}

     

      
    </div>

        </div>
      )}



    
</main>

    </>
  )
}

export default Task1