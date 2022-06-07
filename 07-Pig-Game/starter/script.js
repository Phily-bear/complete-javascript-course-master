'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let playing = true;
let score = [0, 0];
let currentScore0 = 0,
  currentScore1 = 0;
let flag = 0;
score0El.textContent = 0;
score1El.textContent = 0;

console.log(btnRoll);

diceEl.classList.add('hidden');

const generate = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const addToCurrent = function (num) {
  if (!flag) {
    currentScore0 += num;
  } else {
    currentScore1 += num;
  }
  current0El.textContent = currentScore0;
  current1El.textContent = currentScore1;
};

const addToSum = function () {
  if (!flag) {
    score[0] += currentScore0;
    currentScore0 = 0;
  } else {
    score[1] += currentScore1;
    currentScore1 = 0;
  }
  score0El.textContent = score[0];
  score1El.textContent = score[1];
};

const clearCurrent = function () {
  currentScore0 = currentScore1 = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};

const changeActice = function () {
  // if (!flag) {
  //   player0.classList.remove('player--active');
  //   player1.classList.add('player--active');
  // } else {
  //   player1.classList.remove('player--active');
  //   player0.classList.add('player--active');
  // }
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  flag ^= 1;
};

//Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1、Generate a number
    const num = generate();
    //2、Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${num}.png`;
    //3、check
    if (num === 1) {
      changeActice();
      clearCurrent();
    } else {
      addToCurrent(num);
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    addToSum();
    if (score[flag] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${flag}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${flag}`)
        .classList.remove('player--active');
    } else {
      changeActice();
      clearCurrent();
    }
  }
});

newGame.addEventListener('click', function () {
  playing = true;
  if (!diceEl.classList.contains('hidden')) diceEl.classList.add('hidden');
  if (
    document
      .querySelector(`.player--${flag}`)
      .classList.contains('player--winner')
  )
    document
      .querySelector(`.player--${flag}`)
      .classList.remove('player--winner');
  flag = 0;
  currentScore0 = currentScore1 = 0;
  score[0] = score[1] = 0;
  if (!player0.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = current1El.textContent = 0;
});
