//// Importing module
//// All modules are excuted by using strict mode
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';
console.log('Importing module');
// console.log(shoppingCost);

// addToCart('bread', 5);
// console.log(price, qt);

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
import { cart } from './shoppingCart.js';
import add from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);
add('pears', 2);

////This proves that imports are not copies of the export,they are live connection
console.log(cart);

// top-level await(only works in module)
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   console.log('Start fetching');
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   //   console.log(res);
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

//// Not very clean
// lastPost.then(data => console.log(data));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shippingCost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apples', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

// // Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//         `${quantity} ${product} added to cart (shippingCost is ${shippingCost})`
//     );
// };

// //import
// const {addToCart} = require('./shoppingCart.js');

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 6 },
  ],

  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIn = false;
console.log(stateClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting},${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

Promise.resolve('Test').then(x => console.log(x));

import 'core-js/stable';
import 'regenerator-runtime/runtime';
