"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Current Number! ";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

//document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // if there is no guess
  if (!guess) {
    //document.querySelector(".message").textContent = "No Number Is Written!";
    displayMessage(" ⛔ No Number is written");

    // Player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number";
    displayMessage("😎👍 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is wqrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //  guess > secretNumber ? "Too High" : "Too Low";
      displayMessage(guess > secretNumber ? " 📈 Too High" : "📉 Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You Lost the Game ";

      displayMessage("😪 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
    // guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "Too High";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "You Lost the Game ";
    //     document.querySelector(".score").textContent = 0;
    //   }

    //   //guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "Too Low";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "You Lost the Game ";
    //     document.querySelector(".score").textContent = 0;
    //   }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start Guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

//document.querySelector(".message").textContent = "Correct Number";
