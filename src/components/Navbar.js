import React, { Component } from 'react'
  import {Link} from 'react-router-dom';
import logo from '../electrical.jpg';
import {ButtonContainer} from './Button';
import styled from 'styled-components';


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className= "navbar   ">
     <Link to="/">
     <img src = {logo} alt ="logo" className="navbar-brand" />
     </Link>
     <input type="text" id="search" placeholder="auto seach for item.."/>

     
     <ul className="nav navbar-nav navbar-right align-item-center  ">

          <li className="nav-item ">
          <Link to="/" className="nav-link">
            shop
          </Link>
          </li>  
         
             
     </ul>
     <ul className="nav navbar-nav navbar-right align-item-center  ">

     <li className="nav-item ">
          <Link to="/" className="nav-link">
            checkout
          </Link>
          </li>  </ul>
     <Link to ='/cart'  >
     
     <ButtonContainer>
       <span className="">       
       <i className="fas fa-cart-plus" /> my cart
</span>
     </ButtonContainer>
     </Link>
     


     </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav `
background: var(--white);
border-bottom:solid;
border-width: 0.1em;


border-bottom-color:grey !important;
.nav-link{
  color: var(--mainDark) !important;
  font-size: 1.3rem;
  text-transform: capitalize;

}

`;