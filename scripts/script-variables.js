const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const levels = document.getElementById("user-input");
let lastHole;
let timeUp = false;
let score = 0;
let minTime = 300;
let maxTime = 1500;
