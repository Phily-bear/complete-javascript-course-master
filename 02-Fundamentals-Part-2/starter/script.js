'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is csj');
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 2));

// //Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${cutFruitPieces(apples)} apples and ${cutFruitPieces(oranges)} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

//challenge 1
// const calcAverage = function (a, b, c) {
//     const avg = (a + b + c) / 3;
//     console.log(avg);
//     return avg;
// }

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) return "Dolphins wins the game 🏆";
//     else if (avgKoalas >= 2 * avgDolphins) return "Koalas wins the game 🏆";
//     else return "No team wins the game 👻";
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// console.log(checkWinner(avgDolphins, avgKoalas));

// const friends = ['Micheael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// friends[2] = 'Jay';
// console.log(friends);

// friends.push('sanbing');
// console.log(friends);

// // friends = ['Bob', 'Alice'];

// const jonas = ['Jonas', friends];
// console.log(jonas);

// const friends = ['Micheael', 'Steven', 'Peter'];

// //Add elements
// let newLength = friends.push('Jay');
// console.log(friends, newLength);

// friends.unshift('John');
// console.log(friends);

// //Remove elements
// let popped = friends.pop(); //last
// console.log(friends, popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));   //1
// console.log(friends.indexOf('Bob'));   //-1

// friends.push(23);
// console.log(friends.includes('Steven'));   //true
// console.log(friends.includes('Bob'));  //false
// console.log(friends.includes('23'));  //false


// //challenge 2
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const sum = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(sum);


const jonasArray = [
    'Jonas',
    'Schemedman',
    'teacher',
    2037 - 1991,
    ['Michael', 'Peter', 'Steven']
];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['age']);
// console.log(jonas['sanbing']);   //undefined

// const interested = prompt('What do you like most?');
// console.log(jonas[interested]);
// jonas['school'] = '福大';
// console.log(jonas);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2022 - birthYear;
    },

    calcAge2: function () {
        return 2022 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge2()}-year old ${this.job} , and he has ${this.hasDriversLicense ? "a" : "no"} driversLicenses`;
    }
};

console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas['calcAge'](jonas['birthYear']));

console.log(jonas.calcAge2());
console.log(jonas['calcAge2']());

console.log(jonas.job);
console.log(jonas.job);
console.log(jonas.job);
console.log(jonas.getSummary());
