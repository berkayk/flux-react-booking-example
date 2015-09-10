/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ShopConstants = require('../constants/ShopConstants');
var assign = require('object-assign');

var CART_UPDATED = 'cart_updated';
var PRODUCTS_READY = 'products_ready';

var _cart = {};
var _products = {};
_products[1] = {id: 1, name:"T-Shirt", description: "Some t-shirt", price: 1.99 , currency: "USD"};
_products[2] = {id: 2, name:"Shorts", description: "Some shorts you can buy", price: 2.99, currency: "USD"};
_products[3] = {id: 3, name:"Pants", description: "Some pants too", price: 4.99, currency: "USD"};

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function addToCart(product) {
  if (!_cart[product.id]){
    product.quantity = 1;
    console.log("Added new item " + product.name);
    _cart[product.id] = product;

  }
  else
  {
    _cart[product.id].quantity++;
    console.log("Increased quantity of " + product.name + " to " + _cart[product.id].quantity);
  }
  ShopStore.emitCartUpdated();
}

function removeFromCart(product) {
  if (product){
    product.quantity--;
    console.log("Removed item now quantity " + product.quantity);
    if (product.quantity == 0){
      delete _cart[product.id];
    }
    ShopStore.emitCartUpdated();
  }
}

var ShopStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAllProducts: function() {
    return _products;
  },

  getCart: function(){
    return _cart;
  },

  emitCartUpdated: function() {
    this.emit(CART_UPDATED);
  },

  /**
   * @param {function} callback
   */
  addCartUpdatedListener: function(callback) {
    this.on(CART_UPDATED, callback);
  },

  /**
   * @param {function} callback
   */
  removeCartUpdatedListener: function(callback) {
    this.removeListener(CART_UPDATED, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case ShopConstants.ADD_TO_CART:
        console.log("Received add to cart at store with: " + action.product.name);
        addToCart(action.product);
        break;
    case ShopConstants.REMOVE_FROM_CART:
      console.log("Received remove from cart at store with: " + action.product.name);
      removeFromCart(action.product);
      ShopStore.emitCartUpdated();
      break;

    default:
      // no op
  }
});

module.exports = ShopStore;
