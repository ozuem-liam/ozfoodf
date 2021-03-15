import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './context';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/cart';
import Modal from './components/Modal';
import Categories from './components/Categories';
import Drinks from './components/Drinks';
import Sauce from './components/Sauce';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Profile from './components/Profile';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
          <React.Fragment>
              <Navbar />
              <Categories />
              <Switch>
                <Route exact path="/" component={SignUp} />
                <Route path="/login" component={LogIn} />
                <Route path="/menu" component={MenuList} />
                <Route path="/drinks" component={Drinks} />
                <Route path="/sauce" component={Sauce} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/profile" component={Profile} />
                <Route component={Default} />
              </Switch>
              <Modal />
          </React.Fragment>
      </div>
      </Provider>
    )
  }
}
