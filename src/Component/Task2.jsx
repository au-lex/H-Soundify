import React from 'react';






import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';







const Task2 = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
 autoplay: true,
  autoplaySpeed: 2000,
  
   
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
      

      <div className=' px-[1rem] lg:px-[5rem] mt-8 lg:my-[2rem] overflow-x-hidden'>

    
     

      <Slider {...settings}>
      
    


      <div className="box box-1">
          <div className="box-text-1">
            <p>Enjoy</p>
            <h2>With</h2>
            <h1 className="earphone">EARPHONE</h1>
            <button className="type1">Browse</button>
          </div>
        </div>
       
        <div className="box box-2">
          <div className="box-text-2">
            <p>Now</p>
            <h2>Wear</h2>
            <h1 className="galaxy">GALAXY</h1>
            <button className="type2">Browse</button>
          </div>
        </div>

        <div className="box box-3">
          <div className="box-text-3">
            <p>Trend</p>
            <h2>Devices</h2>
            <h1 className="laptop">LAPTOP</h1>
            <button className="type2">Browse</button>
          </div>
        </div>
        <div className="box box-4">
          <div className="box-text-1">
            <p>Best</p>
            <h2>Gaming</h2>
            <h1 className="console">CONSOLE</h1>
            <button className="type1">Browse</button>
          </div>
        </div>
        {/* <div className="box box-5">
          <div className="box-text-2">
            <p>Play</p>
            <div>
              <h2>Game</h2>
            </div>
            <h1 className="oculus">OCULUS</h1>
            <button className="type2">Browse</button>
          </div>
        </div> */}
        <div className="box box-6">
          <div className="box-text-3">
            <p>New</p>
            <div>
              <h2>Amazon</h2>
            </div>
            <h1 className="speaker">SPEAKER</h1>
            <button className="type2">Browse</button>
          </div>
        </div>

          </Slider>
     
          </div>

<div className=' lg:px-[4rem] px-2 mt-[2rem]'>


      <div className="icon-container ">
        <div className="icon border-2 w-full shadow-md py-4 rounded-[10px]">
          <img src="images/Icons/icons8-delivery-truck-96.png" alt="icon1" />
          <h5>Free Shipping</h5>
          <p>Free shipping On All Order</p>
        </div>
        <div className="icon w-full  border-2 shadow-md py-4 rounded-[10px]">
          <img src="images/Icons/icons8-badge-80.png" alt="Icon2" />
          <h5>Money Guarantee</h5>
          <p>30 Day Money Back</p>
        </div>
        <div className="icon w-full  border-2 shadow-md py-4 rounded-[10px]">
          <img src="images/Icons/icons8-support-80.png" alt="Icon3" />
          <h5>Online Support 24/7</h5>
          <p>Technical Support 24/7</p>
        </div>
        <div className="icon  w-full border-2 shadow-md py-4 rounded-[10px]">
          <img src="images/Icons/icons8-payment-100.png" alt="Icon4" />
          <h5>Secure Payment</h5>
          <p>All Cards Accepted</p>
        </div>
      </div>

     
    </div>


    </>
  )
}

export default Task2