import React from 'react'
import Common from "./Commonfile"
import pic1 from "../src/images/homelogo.jpg"

const Home = () => {
  return (
    <>
      {/* <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow Your Business With
                    <strong className="brand-name"> Technical Industry</strong>
                  </h1>
                  <h2>We are the team of talented Developer making website</h2>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to="/">Get started</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 header-img order-1 order-lg-2">
                  <img src="" alt="text"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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