import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App