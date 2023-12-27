import { useState , useEffect} from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Task1 from './Component/Task1'
import Task2 from './Component/Task2'
import Task3 from './Component/Task3'
import Task4 from './Component/Task4'
import Newarrival from './Component/Newarrival'
import newArr from './Component/Data'
import products from './Component/Feature'



function App() {
  const [cart, setCart] = useState([]) 
  // const addToCart = (product) =>  {
  //   console.log('Adding to Cart:', product);
  //   setCart([...cart, product])
    
  // }4


  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity and price
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      updatedCart[existingProductIndex].totalPrice += product.price;
      setCart(updatedCart);
      
    toast.success(`${product.name} added to cart`);
    } else {
      // If the product is not in the cart, add it with quantity 1
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

  // const cartPrice =  () =>  {
  //   return cart.reduce((total, item)  => total + item.price,0)
  // }

  const cartPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   console.log('Loaded cart from local storage:', storedCart);
  //   setCart(storedCart);
  // }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Loaded cart from local storage:', storedCart);
    setCart((prevCart) => [...prevCart, ...storedCart]);
  }, []);
  
  useEffect(() => {
    console.log('Saving cart to local storage:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  // useEffect(() => {
  //   console.log('Saving cart to local storage:', cart);
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);
  
  

  return (
  <>

<ToastContainer position="top-right" autoClose={3000} />
 <Task1  cart={cart}  total={cartPrice()}  removeFromCart={removeFromCart}  increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity} />
 <Newarrival prod={newArr}  addToCart={addToCart} />
  <Task2 />

  <Task3  products={products} addToCart={addToCart} />

  <Task4 />
  </>
  )
}

export default App
