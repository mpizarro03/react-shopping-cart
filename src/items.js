import React from 'react';
import CartItem from './item.js';

const CartItems = (props) => {
    return (
      <div className="container">
        <h1>CartItems</h1>
        <div class="list-group-item">
        <div class="row">
            <div class="col-md-8">Product</div>
            <div class="col-md-2">Price</div>
            <div class="col-md-2">Quantity</div>
          </div>
        </div>
        {props.items.map(item => <CartItem product={item.product} quantity={item.quantity}/>)}
      </div>
    );
}
export default CartItems;
