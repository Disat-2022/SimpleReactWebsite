import React from 'react'
import Common from "./Commonfile"
import pic1 from "../src/images/homelogo.jpg"

const Home = () => {
  return (
    <>

      <Common 
      name="Grow Your Business With" 
      imgsrc={pic1}
      visit="/service"
      btnname="Get Started"
      />

    </>
  )
}

export default Home