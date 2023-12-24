import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon

import prj1 from '../../assett/p-1.png';
import prj2 from '../../assett/p-2.jpg';
import prj3 from '../../assett/p-3.jpg';
import prj4 from '../../assett/p-4.jpg';
import prj5 from '../../assett/p-5.jpg';
import prj6 from '../../assett/h.png';
import prj7 from '../../assett/p-7.jpg';
import prj8 from '../../assett/image1.png';
import prj9 from '../../assett/Laptop.png';
import prj10 from '../../assett/mus.png';

const imageArray = [
  { id: 1, image: prj1, name: 'Wireless Over-Ear Headphones', price: '$149.99' },
  { id: 2, image: prj2, name: 'Bluetooth In-Ear Earphones', price: '$59.99' },
  { id: 3, image: prj3, name: 'Noise-Canceling On-Ear Headphones', price: '$199.99' },
  { id: 4, image: prj4, name: 'Sport Wireless Earbuds', price: '$79.99' },
  { id: 5, image: prj5, name: 'Gaming Headset with Microphone', price: '$129.99' },
  { id: 6, image: prj6, name: 'Stylish Fashion Headphones', price: '$89.99' },
  { id: 7, image: prj7, name: 'High-Performance Studio Headphones', price: '$249.99' },
  { id: 8, image: prj8, name: 'Premium Over-Ear Hi-Fi Headphones', price: '$299.99' },
  { id: 9, image: prj9, name: 'Laptop Headset with Noise Isolation', price: '$69.99' },
  { id: 10, image: prj10, name: 'Musical Instrument Headphones', price: '$119.99' },
];

const Featurepro = () => {
  return (
    <div>
      {/* <section className='  bg-slate-100  mt-[2rem]'>
        {imageArray.map((item) => (
          <div className='my-4 mx-4 bg-white rounded-md shadow-md  w' key={item.id}>
            <img className='w-[200px] h-[200px] object-cover mb-4' src={item.image} alt={`Product ${item.id}`} />
            <div className='text-center'>
              <h3 className='text-sm font-bold'>{item.name.substring (0,10)}....</h3>
              <p className='text-xs text-gray-500'>{item.price}</p>
              <div className=''>
              
               
              </div>
            </div>
          </div>
        ))}
      </section> */}
    </div>
  );
};

export default Featurepro;
