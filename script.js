"use strict";
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let bttn = document.querySelector(".btn").style.disabled;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // if there is no number added and check bttn
  if (!guess) {
    displayMessage("There is no guessing yet🤔");
  } else if (guess === randomNumber) {
    displayMessage("💥Correct Number Nice you got it");

    displayNumber(randomNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== randomNumber)
    if (score > 0) {
      score--;
      displayMessage(guess > randomNumber ? "Too High " : "Too Low");
      displayScore(score);
    } else {
      displayMessage("You Lost the Game ");
      displayScore(score);

      document.querySelector(".btn").style.disabled = true;
    }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  displayNumber("?");
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
