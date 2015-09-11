/**
 * Created by berkay on 9/11/2015.
 */
var React = require('React');
var ShopActions = require('../actions/ShopActions');

var CartHeader = React.createClass({
    render: function(){
        return (
            <div className="clearfix">
                <h4 className="pull-left">There are {this.props.items} items in cart.</h4>
                <a className="btn btn-danger pull-right" onClick={this._onClickEmpty}><i className="fa fa-trash-o"></i> Empty Cart</a>
            </div>
        )
    },
    _onClickEmpty: function(e){
        ShopActions.emptyCart();
    }
});

module.exports = CartHeader;

