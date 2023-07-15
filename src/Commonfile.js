import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Technical Industry</strong>
                  </h1>
                  <h2>We are the team of talented Developer making website</h2>
                  <div className="my-3">
                    <NavLink className="btn-get-started" to={props.visit}>{props.btnname}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 header-img order-1 order-lg-2">
                  <img className="img-fluid animated" src={props.imgsrc} alt="text"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common