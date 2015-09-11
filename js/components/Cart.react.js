/**
 * Created by berkay on 9/10/2015.
 */
var React = require('react');
var CartItem = require('./CartItem.react');
var CartTotal = require('./CartTotal.react');
var CartHeader = require('./CartHeader.react');

var Cart = React.createClass({
    render: function(){
        var allCart = this.props.cart;
        var items = [];
        var total = 0;

        for (var key in allCart) {
            items.push(<CartItem quantity={allCart[key].quantity} key={allCart[key].id} product={allCart[key]} />);
            total += allCart[key].price * allCart[key].quantity;
        }

        if (items.length == 0)
            return <div className="alert text-center">Your cart is empty.</div>

        return (
            <div>
                <CartHeader items={items.length} />
                <ul className="list-unstyled">{items}</ul>
                <CartTotal total={total}/>
            </div>
        )
    }
});

module.exports = Cart;