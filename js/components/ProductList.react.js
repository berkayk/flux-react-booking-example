/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ProductItem = require('./ProductItem.react');
var ReactPropTypes = React.PropTypes;

var ProductList = React.createClass({


  /**
   * @return {object}
   */
  render: function() {

    var allProducts = this.props.products;
    var count = allProducts.length;
    var products = [];

    for (var key in allProducts) {
      products.push(<ProductItem key={allProducts[key].id} product={allProducts[key]} />);
    }

    return (
        <div className="col-sm-6 right-border">
          <h3 className="text-center">There are {products.length} products available</h3>
            <ul className="list-unstyled">{products}</ul>
        </div>
    );
  },

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll: function() {
  }

});

module.exports = ProductList;
