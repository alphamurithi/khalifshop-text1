import React, { Component } from 'react'
import logo from '../buynow.gif'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
  render() {
    const style ={
      textDecorationLine: "underline",
      color:"coral",

    }
    return (
      <div className="container-fluid bg-inverse text-white mt-5">
        <div className="row">
          <div className="col-md-3" >
          <p style={style}>CONTACT INFO</p>

              <p> <i className="fas fa-home"></i> ADDRESS: <br /> 456, NAKURU

              </p>
              <p ><i className="fas fa-phone"></i>PHONE: <br/>07012345678</p>
              <p><i className="fas fa-envelope"></i>      EMAIL: <br/>contact@support.com</p>

          </div>
          <div className="col-md-3">
          <p style={style}>GET TO KNOW US</p>
          <p>career<br/>
          About us<br />
          Term and Condition <br />
          Privacy Policy</p>

</div>
          <div className="col-md-3">
          <p style={style}>JOIN US</p>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-google"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-youtube"></a>
           <a href="#" className="fa fa-instagram"></a>




          </div>

          <div className="col-md-3 
          ">
 <Link to="/">
  <img src= {logo} className="img-fluid mt-4" alt="shopnow" />
  
          </Link> 
          <p style={style}>PAYMENT METHODS</p>
          <button className="btn btn-danger text-uppercase mb-3 px-5" type="buttom" >
            paypal
        </button>
          </div>

        
        
        </div> 
      
      </div>
    )
  }
}
