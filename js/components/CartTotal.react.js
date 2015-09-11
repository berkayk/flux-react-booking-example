/**
 * Created by berkay on 9/10/2015.
 */
var React = require('react');

var CartTotal = React.createClass({
    render: function(){
        return (
            <div className="alert alert-warning">
                <h4>
                Total: <div className="pull-right">{this.props.total} <small>USD</small></div>
                </h4>
            </div>
        )
    }
});

module.exports = CartTotal;