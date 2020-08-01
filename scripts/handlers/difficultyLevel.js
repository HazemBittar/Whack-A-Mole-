"use strict";
console.log("--- loading handler: difficultyLevel.js");

function difficultyLevelHandler() {
  debugger;
  const form = event.target.form;
  const level = form.level.value;

  if (level === "easy") {
    minTime = 500;
    maxTime = 2000;
  } else if (level === "difficult") {
    minTime = 200;
    maxTime = 1000;
  } else {
    minTime = 300;
    maxTime = 1500;
  }
}
