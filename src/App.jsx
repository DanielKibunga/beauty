import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Collection from './components/pages/Collection.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Cart from './components/pages/Cart.jsx'
import Product from './components/pages/Product.jsx'
import Footer from './components/Footer'
import Login from './components/pages/Login.jsx'
import PlaceOrder from './components/pages/PlaceOrder.jsx'
import Orders from './components/pages/Orders.jsx'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
