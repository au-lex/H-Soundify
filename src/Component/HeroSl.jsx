import React, { useState, useEffect } from 'react';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';











const HeroSl = () => {



    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
 autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  
   
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          pauseOnHover: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    < >

<div className="relative h-screen hidden lg:block   overflow-x-hidden overflow-y-hidden">
      <Slider {...settings}>
        <div className="h-screen">
          <img
            src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/cache/catalog/main-banner-1-1903x1009.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-screen">
          <img
            src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/cache/catalog/main-banner-2-1903x1009.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>




    <div className="relative  mt-[4rem] hidden md:block overflow-x-hidden overflow-y-hidden lg:hidden">
      <Slider {...settings}>
        <div className="">
          <img
            src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/cache/catalog/main-banner-1-1903x1009.jpg"
            alt=""
            className="w-[1600px] h-[350px] object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/cache/catalog/main-banner-2-1903x1009.jpg"
            alt=""
            className='w-[1000px] h-[350px] object-cover'
          />
        </div>


        
      </Slider>
    </div>


<div className="relative  mt-[4rem] block md:hidden overflow-x-hidden overflow-y-hidden lg:hidden">
      <Slider {...settings}>
        <div className="">
          <img
            src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/cache/catalog/main-banner-1-1903x1009.jpg"
            alt=""
            className="w-[600px] h-[260px] object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/cache/catalog/main-banner-2-1903x1009.jpg"
            alt=""
            className='w-[600px] h-[260px] object-cover'
          />
        </div>


        
      </Slider>
    </div>


    <div className=' px-[0rem]  mt-8 lg:my-[2rem] overflow-x-hidden hidden'>

  
   

    <Slider {...settings}>
    
  


   

      <div className='  '>
        <img src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/catalog/cms-banner-3.jpg" alt="" />
      
        
   
      </div>
     
<div>
  <img src="     https://demo.codezeel.com/opencart/OPC05/OPC050106/image/catalog/cms-banner-2.jpg" alt="" />
</div>


<div>
  <img src="https://demo.codezeel.com/opencart/OPC05/OPC050106/image/catalog/cms-banner-1.jpg" alt="" />
</div>
   

        </Slider>
   
        </div>


  </>
  )
}

export default HeroSl





