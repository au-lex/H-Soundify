import React, { useState } from 'react'
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import heroimg from '../Component/image 1.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Task1 = () => {

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

  const [openbar, setOpenBar] = useState(false)
  const [selectedImage, setSelectedImage] = useState(smallImages[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
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

 
<ol className=' text-slate-200  px-4 space-x-14 hidden lg:flex '>
  <li className='mb-[1rem] py-2'>Home</li>
  <li className='mb-[1rem] py-2 '>Product</li>
  <li className='mb-[1rem] py-2 '>About us</li>
  <li className='mb-[1rem] py-2 '>Contact us</li>
</ol>
<span className='flex space-x-4 text-slate-100'> 

< IoMdCart className='text-[1.5rem]' />
<RiMenu4Line onClick={openBar} className='text-[1.5rem] lg:hidden'   />
</span>
  </section>
  <div   className={`openMenu  w-full  top-[4rem]    ${openbar ? 'active' : ''} fixed
   right-0 z-50`}>

<ol className=' pt-[3rem] text-slate-200 text-center px-4 '>
  <li className='mb-[1rem] py-2 border'>Home</li>
  <li className='mb-[1rem] py-2 border'>Product</li>
  <li className='mb-[1rem] py-2 border'>About us</li>
  <li className='mb-[1rem] py-2 border'>Contact us</li>
</ol>


  
</div>

  <section className='hero h-[100vh]  my:h-[140vh] mt-[4rem] flex  pt-[4rem] flex-wrap  lg:h-[100vh] lg:flex-nowrap
   justify-center lg:px-[4rem] px-[1rem]   '>
   


   
<div className='  lg:w-[400px] lg:h-[200px] w-[400px]  rounded-full -order-1  lg:order-1 '>
{/* <img src={heroimg} alt="" /> */}
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
   
<div className='   lg:hidden ' >

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

    <div className='  lg:w-[60%] hidden lg:block ' >

<h3 className='text-[5rem] font-bold leading-[90px] lg:mb-[1rem] text-slate-100 mt-[2rem]'>


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
{/* <section className="hero bg-red-500 w-full  ">
  <nav className='fixed  bg-slate-200   h-[6rem] backdrop-blur-lg opacity-80 top-0  w-full flex justify-between px-[4rem] py-[1rem]'>


<div className="logo flex text-[2rem]"><span> <FaHeadphonesAlt className='text-[3rem] text-rose-500 mr-4' /></span>Soundify</div>

<ol className='flex space-x-28 pt-[1rem] font-semibold'>
  <li>Home</li>
  <li>Product</li>
  <li>About us</li>
  <li>Contact us</li>
</ol>

<div>
  < IoMdCart size={32}/>
</div>

  </nav>
  <div className='mt-[6rem] relative'>
    <div className="desc absolute">
      <p>* Starting price $120.00</p>
<h1>
PORTABLE
WIRELESS</h1>
    </div>
    <img src="https://fullkit.moxcreative.com/audioplus/wp-content/uploads/sites/25/2023/07/img_7.png" alt="" />
    {/* <img src="https://electon6-store.myshopify.com/cdn/shop/files/slider-1.jpg?v=1650691565" alt="" /> */}
  {/* </div> */}
{/* </section>  */}


    
</main>

    </>
  )
}

export default Task1