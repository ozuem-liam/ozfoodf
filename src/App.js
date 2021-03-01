import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/cart';
import Modal from './components/Modal';

export default class App extends Component {
  render() {
    return (
      <div>
          <React.Fragment>
              <Navbar />
              <Switch>
                <Route exact path="/" component={MenuList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
              </Switch>
              <Modal />
          </React.Fragment>
      </div>
    )
  }
}
