/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;
var ShopActions = require('../actions/ShopActions');

var ProductItem = React.createClass({

  propTypes: {
   product: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  /**
   * @return {object}
   */
  render: function() {
    var product = this.props.product;

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <li
        key={product.id}>
        <div className="product-item">
          <div>
            <h3 className="bold">{product.name}</h3>
            <p className="text-muted">{product.description}</p>
            <hr />
            <div className="clearfix">
              <h4 className="pull-left"><b>{product.price}</b> <small>USD</small></h4>
              <a className="btn btn-success pull-right" onClick={this._onClickBuy}><i className="fa fa-cart-plus"></i> Add To Cart</a>
            </div>
          </div>
        </div>
      </li>
    );
  },

  _onClickBuy: function(e){
    console.log("Buying item " + this.props.product.id);
    ShopActions.addToCart(this.props.product);
  }

});

module.exports = ProductItem;
