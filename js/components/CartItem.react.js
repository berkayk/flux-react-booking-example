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

var CartItem = React.createClass({

  propTypes: {
   product: ReactPropTypes.object.isRequired,
    quantity: ReactPropTypes.number
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

    return (
        <li
            key={product.id}>
          <div className="product-item">
            <div>
              <h3 className="bold">{product.name}</h3>
              <p className="text-muted">{product.description}</p>
              <hr />
              <div className="clearfix">
                <h4 className="pull-left"><b>{product.price}</b> <small>{product.currency}</small> <small>x{this.props.quantity}</small></h4>

                <a className="btn btn-sm btn-warning pull-right" onClick={this._onClickEmpty}><i className="fa fa-trash-o"></i> REMOVE ALL</a>
                <a className="btn btn-sm btn-default pull-right right-10" onClick={this._onClickRemove}><i className="fa fa-minus"></i> Remove</a>
              </div>
            </div>
          </div>
        </li>
    );
    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
  },

  _onClickRemove: function(e){
    console.log("Remove item " + this.props.product.id);
    ShopActions.removeFromCart(this.props.product);
  },
  _onClickEmpty: function(e){
    console.log("Removing all for " + this.props.product.id);
    ShopActions.removeAllFromCart(this.props.product);
  }

});

module.exports = CartItem;
