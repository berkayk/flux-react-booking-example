/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ShopConstants = require('../constants/ShopConstants');

var ShopActions = {

  /**
   * @param  {string} text
   */
  addToCart: function(product, quantity) {
    AppDispatcher.dispatch({
      actionType: ShopConstants.ADD_TO_CART,
      product: product,
      quantity: quantity
    });
  },
  removeAllFromCart: function(product){
    AppDispatcher.dispatch({
      actionType: ShopConstants.REMOVE_ALL_FROM_CART,
      product: product
    });
  },
  removeFromCart: function(product){
  AppDispatcher.dispatch({
    actionType: ShopConstants.REMOVE_FROM_CART,
    product: product
  });
  },
  emptyCart: function(){
    AppDispatcher.dispatch({
      actionType: ShopConstants.EMPTY_CART
    })
  }
};

module.exports = ShopActions;
