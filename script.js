'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let bttn = document.querySelector('.btn').style.disabled;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'There is no guessing yet🤔';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent =
      '💥Correct Number Nice you got it';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > randomNumber)
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High ';
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game ';
      document.querySelector('.score').textContent = score;

      document.querySelector('.btn').style.disabled = true;
    }
  else if (guess < randomNumber)
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low';
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game ';
      document.querySelector('.score').textContent = score;
    }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
