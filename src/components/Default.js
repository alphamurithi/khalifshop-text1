import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className= "col-10 mx-auto text-center text-title text-uppercase py-5">
         <h1 className="dispay-3">404! error</h1>
         <h1>url<span className ="text-danger mx-2">
          {this.props.location.pathname}
         
         </span> does not exist </h1>
        
      </div>
      </div>
      </div>
    )
  }
}
