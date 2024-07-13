const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

const birdImg = new Image();
birdImg.src = 'bird.png';

let bird = {
    x: 50,
    y: 150,
    width: 34,
    height: 24,
    gravity: 0.6,
    lift: -15,
    velocity: 0
};

const obstacles = [];
const obstacleWidth = 50;
const obstacleGap = 120;
let frame = 0;
let gameInterval;

document.getElementById('startButton').onclick = () => {
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('flapButton').classList.remove('hidden');
    startGame();
};

document.getElementById('flapButton').onclick = () => {
    bird.velocity = bird.lift;
};

document.getElementById('restartButton').onclick = () => {
    document.getElementById('restartButton').classList.add('hidden');
    document.getElementById('flapButton').classList.remove('hidden');
    resetGame();
};

function startGame() {
    gameInterval = setInterval(gameLoop, 20);
}

function resetGame() {
    bird.y = 150;
    bird.velocity = 0;
    obstacles.length = 0;
    frame = 0;
    startGame();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        endGame();
    }

    ctx.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    frame++;
    if (frame % 90 === 0) {
        const obstacleHeight = Math.floor(Math.random() * (canvas.height - obstacleGap));
        obstacles.push({ x: canvas.width, y: obstacleHeight });
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= 2;
        if (obstacles[i].x + obstacleWidth < 0) {
            obstacles.splice(i, 1);
        }

        ctx.fillStyle = 'red';
        ctx.fillRect(obstacles[i].x, 0, obstacleWidth, obstacles[i].y);
        ctx.fillRect(obstacles[i].x, obstacles[i].y + obstacleGap, obstacleWidth, canvas.height - obstacles[i].y - obstacleGap);

        if (
            bird.x < obstacles[i].x + obstacleWidth &&
            bird.x + bird.width > obstacles[i].x &&
            (bird.y < obstacles[i].y || bird.y + bird.height > obstacles[i].y + obstacleGap)
        ) {
            endGame();
        }
    }
}

function endGame() {
    clearInterval(gameInterval);
    document.getElementById('flapButton').classList.add('hidden');
    document.getElementById('restartButton').classList.remove('hidden');
}
