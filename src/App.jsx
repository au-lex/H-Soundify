import React, { useState, useEffect } from 'react';
import './App.css'; // Import your global styles
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Task1 from './Component/Task1';
import Task2 from './Component/Task2';
import Task3 from './Component/Task3';
import Task4 from './Component/Task4';
import Newarrival from './Component/Newarrival';
import newArr from './Component/Data';
import products from './Component/Feature';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Loaded cart from local storage:', storedCart);
    setCart((prevCart) => [...prevCart, ...storedCart]);
  }, []);

  useEffect(() => {
    console.log('Saving cart to local storage:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      updatedCart[existingProductIndex].totalPrice += product.price;
      setCart(updatedCart);

      toast.success(`${product.name} added to cart`);
    } else {
      setCart([...cart, { ...product, quantity: 1, totalPrice: product.price }]);
      toast.success(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);

    toast.error('Item removed from cart');
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    setCart(updatedCart);

    toast.info('Quantity increased');
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].totalPrice -= updatedCart[index].price;
    }
    setCart(updatedCart);

    toast.info('Quantity decreased');
  };

  const cartPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  if (isLoading) {
    // Loader styling using Tailwind CSS
    return (
      <div className="flex items-center flex-col justify-center h-screen bg-gray-900">
        <div className="  animate-bounce rounded-full w-[100px] h-[100px] ">

          <img src="https://fullkit.moxcreative.com/audioplus/wp-content/uploads/sites/25/2023/07/img_7.png" alt="" />
        </div>

        <h1 className="text-2xl font-bold relative inline-block mt-[4rem]">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            SoundIt.io
          </span>
        </h1>
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Task1
        cart={cart}
        total={cartPrice()}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Newarrival prod={newArr} addToCart={addToCart} />
      <Task2 />
      <Task3 products={products} addToCart={addToCart} />
      <Task4 />
    </>
  );
}

export default App;
