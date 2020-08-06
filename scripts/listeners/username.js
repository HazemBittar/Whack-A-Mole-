'use strict';
console.log('--- loading listener: username.js');

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});