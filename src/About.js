import React from 'react'
import Common from './Commonfile'
import pic2 from "../src/images/aboutuslogo.jpg"
const About = () => {
  return (
    <>
      <Common
      name="Welcome to About Page" 
      imgsrc={pic2}
      visit="/contact"
      btnname="Contacts"
      />
    </>
  )
}

export default About