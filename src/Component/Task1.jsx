import React, { useState } from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseCircleFill } from 'react-icons/ri';
import heroimg from '../Component/image 1.png'
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


<main className='px-[rem]'>

  <section className='flex 
  justify-between z-50 pt-4 fixed w-full left-0 right-0 top-0  
    u lg:px-[4rem] px-4 backdrop-blur-lg h-[4rem]'>
    
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
          className="bg-red-50 min-h-[20rem]  z-50 px-6 w-full fixed mb-[2rem] 
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
  <section className='hero h-[100vh]  my:h-[140vh] mt-[4rem] flex 
   pt-[4rem] flex-wrap  lg:h-[100vh] lg:flex-nowrap md:flex-
   justify-center lg:px-[4rem] px-[1rem]  md:px-[1rem]  '>
   


   
<div className='  lg:w-[400px] lg:h-[200px] md:w-[500px] md:h-[400px] w-[400px] 
 rounded-full -order-1  lg:order-1 '>

<img src={selectedImage} data-aos="fade-up" className='transition duration-300 ' alt="" />


<div className="smallimg flex space-x-4 justify-center">
      {smallImages.map((image, index) => (
        <div
          key={index}
          className="w-[4rem] h-[4rem] border-2 rounded-[10px] outline-none border-red-100"
        >
          <img 
            src={image} 
            alt={`Small Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
            // onClick={() => handleImageClick(image)}
          />
        </div>
      ))}
      </div>
   
<div className='   lg:hidden  md:hidden' >

<h3 className='text-[2rem] font-bold leading-[90px] text-slate-100 mt-[2rem]'>


BOAT Rockerz 370
</h3>
<div className=' text-slate-100 '>wireless preminum noise cancellation</div>
<div className=' text-slate-100 '> Welcome to <span className='text-rose-400 text-[20px]'>Soundify</span> 
 Where Every Beat Counts! Immerse Yourself in Pure Audio Bliss with Our Premium Headphones.
</div>
<span className='flex space-x-10 mb-[4rem]'>
<button className=' w-[60%] bg-red-600 text-slate-100 py-3 rounded-[10px] mt-4'> Shop now</button>
<button className='w-[60%] border-red-500 border text-slate-100 py-3 rounded-[10px] mt-4'> Explore now</button>
</span>

    </div>

   
</div>
  


<section className=' lg:mt-[1.5rem]  '>
 {/* lg */}

    <div className='  lg:w-[60%] hidden lg:block md:block ' >

<h3 className='text-[5rem] md:text-[3rem] font-bold leading-[90px]
 lg:mb-[1rem] text-slate-100 mt-[2rem]'>


BOAT Rockerz 370
</h3>
<div className=' text-slate-100 '>wireless preminum noise cancellation</div>
<div className=' text-slate-100  lg:mb-[1rem]'> Welcome to <span className='text-rose-400 text-[20px]'>Soundify</span> 
 Where Every Beat Counts! Immerse Yourself in Pure Audio Bliss with Our Premium Headphones.
</div>
<span className='flex space-x-10 mb-[4rem]'>
<button className=' w-[60%] bg-red-600 text-slate-100 hover:bg-transparent hover:border hover:border-red-500 delay-200 py-3 rounded-[10px] mt-4'> Shop now</button>
<button className='w-[60%] border-red-500 border hover:bg-red-500 delay-100 text-slate-100 py-3 rounded-[10px] mt-4'> Explore now</button>
</span>

  
   
    </div>
</section>
  </section>



    
</main>

    </>
  )
}

export default Task1