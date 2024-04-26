// game.js
const gameContainer = document.getElementById('game-container');
let score = 0;

function createAnt() {
    const ant = document.createElement('div');
    ant.className = 'ant';
    ant.addEventListener('click', () => {
        score++;
        ant.remove();
    });
    ant.style.left = `${Math.random() * 90}%`;
    ant.style.top = `${Math.random() * 90}%`;
    gameContainer.appendChild(ant);
}

function startGame() {
    setInterval(createAnt, 1000); // Create an ant every second
}

startGame();
