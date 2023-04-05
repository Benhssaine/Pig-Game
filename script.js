"use strict";
// declarations
const scoreP0El = document.querySelector("#score--0");
const scoreP1El = document.querySelector("#score--1");
const currentP0ScoreEl = document.querySelector("#current--0");
const currentP1ScoreEl = document.querySelector("#current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const p0Active = document.querySelector(".player--0");
const p1Active = document.querySelector(".player--1");
let CurrentScore = 0;
let activePlayer = 0;
const scores = new Array(0, 0);
// initialising values
scoreP0El.textContent = 0;
scoreP1El.textContent = 0;
const dice = document.querySelector(".dice");

// adds the css class called hidden
dice.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a randon dice roll
  const roll = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  dice.classList.remove("hidden");
  dice.src = `img/dice-${roll}.png`;
  // 3. Check for rolled if 1:true switch to next player
  if (roll !== 1) {
    // Add dice to current score
    CurrentScore += roll;
    document.querySelector(`#current--${activePlayer}`).textContent =
      CurrentScore;
  } else {
    // Switch player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    CurrentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    p0Active.classList.toggle("player--active");
    p1Active.classList.toggle("player--active");
  }
});
