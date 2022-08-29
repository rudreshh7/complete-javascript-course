'use strict';

//Select the require classes

const player = document.querySelectorAll('.player');
const player1 = document.querySelector('player-0');


// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

//Select the current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// Roll the dive
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEle = document.querySelector('.dice');

let currentScore = 0;
let activePlayer = 0;
// Hiding the image
diceEle.classList.add("hidden");

// Function when clicked on roll dice
btnRoll.addEventListener('click', function() {
    // Math.random
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEle.classList.remove("hidden");
    diceEle.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        // current0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Active player ke text content pe 0 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }

});

// btn hold pr event listener

// btnHold.addEventListener('click', function() {


// })