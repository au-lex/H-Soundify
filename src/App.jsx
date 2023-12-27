import { useState } from 'react'
import './App.css'


import Task1 from './Component/Task1'
import Task2 from './Component/Task2'
import Task3 from './Component/Task3'
import Task4 from './Component/Task4'
import Newarrival from './Component/Newarrival'
import newArr from './Component/Data'
import products from './Component/Feature'
import CartItems from './Component/CartItems'


function App() {
  const [cart, setCart] = useState([]) 
  const addToCart = (product) =>  {
    console.log('Adding to Cart:', product);
    setCart([...cart, product])
    // console.log('Cart Items:', cart);
  }

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const cartPrice =  () =>  {
    return cart.reduce((total, item)  => total + item.price,0)
  }

  return (
  <>
 <Task1  cart={cart}  total={cartPrice()}  removeFromCart={removeFromCart} />
 <Newarrival prod={newArr}  addToCart={addToCart} />
  <Task2 />

  <Task3  products={products} addToCart={addToCart} />
< CartItems  cart={cart}/>
  <Task4 />
  </>
  )
}

export default App
