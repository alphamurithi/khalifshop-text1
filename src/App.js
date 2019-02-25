import React, { Component } from 'react';
import {Switch,Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/modal'
import Footer from './components/Footer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
     <React.Fragment>
      <NavBar></NavBar>
      <Switch>
         <Route exact path ="/" component = {ProductList} />
         <Route path ="/details" component = {Details} />
         <Route path ="/cart" component = {Cart} />
         <Route component = {Default} />
      </Switch>
      <Footer></Footer>
      <Modal></Modal>
         </React.Fragment>
    );
  }
}

export default App;
