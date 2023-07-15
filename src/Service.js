import React from 'react'
import Card from './Card'
import Carddata from './CarddataAPI'
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
              Carddata.map((curele,i)=>{
                return(<>
                  <Card key={i} title={curele.title} image={curele.image}/>
                </>)
              })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service