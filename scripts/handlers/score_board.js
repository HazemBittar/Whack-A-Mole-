'use strict';
console.log('--- loading handler: score_board.js');

const maxScore = 3;
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

function saveHighScore (e) {
    debugger;
    e.preventDefault();
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    console.log(mostRecentScore);
    const userScore = {
        score: mostRecentScore,
        name: username.value
    };
    highScore.push(userScore);
    highScore.sort((a,b) => b.score - a.score);
    highScore.splice(maxScore);
    localStorage.setItem('highScore', JSON.stringify(highScore));
    scoreList.innerHTML = `TOP 3 RESULTS`;
    highScoreList.innerHTML = highScore.map(userScore =>{
        return `<li>${userScore.name}: ${userScore.score}</li>`
    }).join('');
};










