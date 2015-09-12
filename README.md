# Shopping Cart Example Based on Flux & React

This app is developed in learning process of Flux & React. It is a simple shopping cart example, where you can add/remove items from the product list and remove them.
There are 3 products in the store, but you can change them easily by modifying them in ShopStore class. In order to simplify things, I just included them in the ShopStore class creation. 
You can also read them from another .xml file as well if you want.

> Project structure is the same as [Flux Todo Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc/)

## Usage

Please read [Flux Todo Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc/) usage.

## Functionality

There are 4 different methods defined in the store, that you can play with.

```
function addToCart(product, quantity)
function removeFromCart(product)
function removeAllFromCart(product)
function emptyCart()
```

## Thanks

Facebook team, [Flux](http://facebook.github.io/flux/), [React](http://facebook.github.io/react/) and [Bill Fisher](https://www.facebook.com/bill.fisher.771)

## Credits

Developed by [Berkay Kaya](https://www.twitter.com/berkayk)
