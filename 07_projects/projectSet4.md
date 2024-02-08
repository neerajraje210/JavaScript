
# Projects Releated to DOM

## projects link 

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 4

``` javaScript

let randomNo = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuesss = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number greater than 1 ');
  } else if (guess > 100) {
    alert('Please enter a valid number Less than 100 ');
  } else {
    prevGuess.push(guess);
    if (numGuesss === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. random no was ${randomNo}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNo) {
    displayMessage(`You Guessed it right`);
    endGame();
  } else if (guess < randomNo) {
    displayMessage(`Number is Toooo low `);
  } else if (guess > randomNo) {
    displayMessage(`Number is Toooo high `);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuesss++;
  remaining.innerHTML = `${11 - numGuesss}`;
}

function displayMessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNo = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesss = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesss}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);

    playGame = true;
  });

  //
}

```