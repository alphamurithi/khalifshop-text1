import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';
export default class   extends Component {
  constructor(){
    super()
    this.state={
      searchTerm: "",
  
    }
    this.onSearchChange = this.onSearchChange.bind(this);

  }
  
  onSearchChange(event) {
    console.log(event)
    this.setState({ searchTerm: event.target.value });
    }
  render() {
    
    return (
       
     <React.Fragment>
        <div className="py-2">
         <div className="container">
         <div className="row">
         
         <div className="col-12 search">
         <input type="text" id="search" placeholder="auto search for products.. "
                onChange={this.onSearchChange} />
         </div>
         </div>
           <div className="row" >
           <ProductConsumer>
           {value =>{
    return value.products.filter(value.isSearched(this.state.searchTerm)).map(product =>{
      return <Product key ={product.id} product={product} />
       
    })

           }}


           </ProductConsumer>
           
           </div>
         </div>
       </div>
     </React.Fragment>
      
    );
  }
}
