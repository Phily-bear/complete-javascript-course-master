// let js = 'amazing';
// console.log(18 + 5);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Natilda';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let $ab3 = 3;
// let $new = 27;
// let PI = 3.1415926;

// let age = 30;
// age = 31;

// const birthYear = 1990;
// birthYear = 1991;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const compare = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, compare);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// let message = `sanbing ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(message);

// console.log(`String with \n\
// multiple \n\
// lines`);

// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(inputYear + 5);
// console.log(Number(`Jonas`));
// console.log(typeof NaN);

// console.log('I am ' + 22 + ' years old');
// console.log('22' - '10' + 3);

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

//5 falsy values: 0, '', undefined , null, NaN
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean('0'));

// const money = 0;
// if (money) {
//     console.log("Don't spend it at all;");
// }
// else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log("YAY! Height is defined");
// }
// else {
//     console.log('Height is UNDEFINED');
// }

// const age = 18;
// if (age === 18) console.log("You just became an adult");

// const num = Number(prompt("What's your favorite number?"));
// console.log(typeof num);

// if (num === 123) {
//     console.log("Cool! 123 is an amazing number!");
// }

// if (num !== 123) {
//     console.log("sanbing yihao");
// }

//challenge
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins wins the trophy 🏆");
// }
// else if (scoreDolphins < scoreKoalas) {
//     console.log("Koalas wins the trophy 🏆");
// }
// else {
//     console.log("Both win the trophy 🏆");
// }

// const day = 'wednesday';

// switch (day) {
//     case 'monday':
//         console.log("Plan course stucture");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Record examples');
//         break;
//     default:
//         console.log('NOt in my record');
// }

// if (day === 'wednesday' || day === 'thursday') {
//     console.log('Record examples');
// }

let bill = 150;
let tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
console.log(bill * tip);

const s = "2022-05-05T15:30:00.00o+08:00";
console.log(s.slice(0, 19).replace("T", " "));

function digital_root(n) {
  // ...
  if (n < 10) return 0;
  let ans = 0;
  while (n > 0) {
    let t = parseInt(n % 10);
    ans += t;
    n = parseInt(n / 10);
    // console.log(t, ans, n);
  }
  return digital_root(ans);
}

// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this);
// });

document.querySelector("h1").addEventListener("click", () => {
  console.log(this);
});
