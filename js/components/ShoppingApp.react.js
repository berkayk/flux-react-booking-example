/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var ProductList = require('./ProductList.react');
var Cart = require('./Cart.react');
var React = require('react');
var ShopStore = require('../stores/ShopStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function init(){
  return {
    products: ShopStore.getAllProducts(),
    cart: ShopStore.getCart()
  };
}

function getProducts() {
  return {
    products: ShopStore.getAllProducts()
  };
}

function getCart(){
  return {
    cart: ShopStore.getCart()
  };
}

var ShoppingApp = React.createClass({

  getInitialState: function() {
    console.log("getInitialState");
    return init();
  },

  componentDidMount: function() {
    console.log("componentDidMount");
    console.log("Products: " + this.state.products.length);
    console.log("Cart: " + this.state.cart.length);
    ShopStore.addCartUpdatedListener(this._onCartUpdated);
  },

  componentWillUnmount: function() {
    ShopStore.removeCartUpdatedListener(this._onCartUpdated);
  },

  _onCartUpdated: function(){
    console.log("Cart updated.");
    this.setState(getCart());
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="container">
          <h1 className="thin text-center">Flux/React <b>Shopping Cart</b> App</h1>
          <hr />
          <div className="row">
              <ProductList products={this.state.products}/>
              <Cart cart={this.state.cart}/>
          </div>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = ShoppingApp;
