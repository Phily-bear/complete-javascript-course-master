'use strict';

// const a = 'Jonas';
// first();

// function first() {
//   const b = 'Hello!';
//   second();

//   function second() {
//     const c = 'Hi!';
//     third();
//   }
// }

// function third() {
//   const d = 'Hey!';
//   console.log(d + c + b + a);
// }

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log(first);
//   function printAge() {
//     const output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you'r a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a * b;
//       }
//     }

//     console.log(millenial);
//     console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

////Variable
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//function

//console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example
// if (!num) deleteShoppingCart();
// var num = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// f();

//普通函数的this是undefined
// function first() {
//   console.log(this);
// }
// first();

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // const isMillenial = function () {
//     //   console.log(this);
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   //这里的this是window
//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },
// };

// jonas.calcAge();
// jonas.greet();

// //arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   firstName: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(me.age);
// console.log(friend.age);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
