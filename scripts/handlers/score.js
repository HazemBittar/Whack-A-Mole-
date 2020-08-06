"use strict";
console.log("--- loading handler: score.js");

function bonk() {
  debugger;
  console.log(event.target.className);
  if (!event.isTrusted) return; // cheater!
  if (event.target.className === "mole") {
    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent = score;
    localStorage.setItem('mostRecentScore', score);
  } else {
    return;
  }
}
