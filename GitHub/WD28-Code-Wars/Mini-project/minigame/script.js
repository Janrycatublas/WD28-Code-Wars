// script.js
const startButton = document.getElementById('start-button');
const gameContainer = document.getElementById('game-container');
const gameButton = document.getElementById('game-button');
const scoreSpan = document.getElementById('score');

let score = 0;
let timeLeft = 30;
let gameInterval;

startButton.addEventListener('click', startGame);
gameButton.addEventListener('click', handleClick);

function startGame() {
  startButton.style.display = 'none';
  gameContainer.style.display = 'block';
  gameInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;

  if (timeLeft === 0) {
    clearInterval(gameInterval);
    gameButton.style.display = 'none';
    alert('Game over! Your final score is: ' + score);
  }
}

function handleClick() {
  score++;
  scoreSpan.innerText = score;
}
