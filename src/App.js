import React, { Component } from 'react';
import './App.css';
import CartHeader from './header.js';
import CartFooter from './footer.js';
import CartItems from './items.js';

class App extends Component {
  render() {
    return (
      <div>
        <CartHeader/>
        <CartItems/>
        <CartFooter copyright='2016'/>
      </div>
    );
  }
}

export default App;
