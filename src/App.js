import React, { Component } from 'react';
import './App.css';
import CartHeader from './header.js';
import CartFooter from './footer.js';
import CartItems from './items.js';
import AddItem from './addItem.js';
import Total from './total.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products:[
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
    ],
    cart : [],
    total: 0
    }
  }

  total = () => {
     let result = 0
    let cartItem = this.state.cart
     for(let i = 0; i < cartItem.length; i++){
       result += cartItem[i].product.priceInCents * cartItem[i].quantity
     }
     this.state.total = this.state.total + (result / 100)
   }


  onChange = (e) => {
    e.preventDefault()
    // console.log("event:", e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()

    let cartItem = this.state.cart
    let products = this.state.products

    let updatedCart = {
      product: {},
      quantity: parseInt(this.state.quantity)
    }


    for(let i = 0; i < products.length; i++){
      if(products[i].name === this.state.name) {
        updatedCart.product = {
          id: products[i].id,
          name: products[i].name,
          priceInCents: products[i].priceInCents / 100
        }
      }
    }
    if(cartItem.length === 0) {
      updatedCart.id = 1
      cartItem.push(updatedCart)
    }
    else {
      updatedCart.id = cartItem[cartItem.length -1].id + 1

      for(let i = 0; i < cartItem.length; i++){
        console.log(cartItem[i])
        if(cartItem[i].product.name === updatedCart.product.name){
          cartItem[i].quantity = cartItem[i].quantity + updatedCart.quantity
        }
        else {cartItem.push(updatedCart)}
      }
    }
    this.total()
    this.forceUpdate()
    e.target.reset()
  }


  render() {
    return (
      <div>
        <CartHeader/>
        <CartItems items={this.state.cart}/>
        <Total added={this.state.total}/>
        <AddItem type={this.state.products}
          onClick={this.updateCart}
          onChange={this.onChange}
          onSubmit={this.onSubmit}/>
        <CartFooter copyright='2016'/>
      </div>
    );
  }
}

export default App;
