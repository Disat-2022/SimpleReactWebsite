import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [data,setData]=useState({
    fullname:"",
    email:"",
    password:"",
    msg:""
  })
  const naviget = useNavigate();
  const InputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
     return{
      ...preVal,
      [name]:value,
     }
    })

  }
  
  const formSubmit = (e) => {
    e.preventDefault();
    
    alert(`My Name is ${data.fullname}, My Email id ${data.email} and My Password is ${data.password}, Here is What I want to Say ${data.msg}`)
    setTimeout(()=>{
      naviget("/") 
    },2000)
  }
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            
            {/* <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Password</label>
              <input type="password" name="password" value={data.password} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Password" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12 mb-5">
              <button type="submit" className="btn btn-outline-primary">Submit Form</button>
              <button type="button" className="btn btn-outline-primary">Reset Form</button>
              <input type="reset" value="Reset Form"/> 
            </div> */}
            
            <form onSubmit={formSubmit} id="contact-form">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Password</label>
              <input type="password" name="password" value={data.password} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Password" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3" placeholder="Enter your Message Here"></textarea>
            </div>
            <div className="col-12 mb-5">
              <button type="submit" className="btn btn-outline-primary">Submit Form</button>
              {/* <button type="reset" className="btn btn-outline-primary">Reset Form</button>  */}
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact