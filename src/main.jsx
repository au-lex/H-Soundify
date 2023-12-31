import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

// import FoodMenu from './Components/Pages/FoodMenu.jsx';
import About from './Pages/About.jsx';
import Contact from './/Pages/Contact.jsx';
// import Checkout from './Pages/Checkout.jsx';

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/abt",
    element: <About />,
  },

  

  {
    path: "/Contact",
    element: <Contact/>,
  },

  
  // {
  //   path: "/Check",
  //   element: <Checkout />,
  // },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)