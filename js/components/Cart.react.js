/**
 * Created by berkay on 9/10/2015.
 */
var React = require('react');
var CartItem = require('./CartItem.react');
var CartTotal = require('./CartTotal.react');

var Cart = React.createClass({
    render: function(){
        var allCart = this.props.cart;
        var items = [];
        var total = 0;

        for (var key in allCart) {
            items.push(<CartItem quantity={allCart[key].quantity} key={allCart[key].id} product={allCart[key]} />);
            total += allCart[key].price * allCart[key].quantity;
        }

        return (
            <div className="col-sm-6">
                <h3>There are {items.length} items in cart.</h3>
                <ul className="list-unstyled">{items}</ul>
                <CartTotal total={total}/>
            </div>
        )
    }
});

module.exports = Cart;