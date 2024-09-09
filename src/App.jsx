import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Layout/Header'
import Home from './page/Home'
import Shop from './page/Shop'
import About from './page/About'
import Footer from './components/Layout/Footer'
import Blog from './page/Blog'
import Contact from './page/Contact'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Services from './page/Services'
import Cart from './page/Cart'
import Checkout from './page/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="about-us" element={<About />}/>
          <Route path="service" element={<Services />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="contact-us" element={<Contact />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="checkout" element={<Checkout />}/>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
