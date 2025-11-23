// Get the elements from HTML
const container = document.getElementById('body');
const box = document.getElementById('box');

let flag = false;

// DVD object with properties
const dvd = {
    element: box,
    x: 100,
    y: 100,
    speedX: 3,
    speedY: 2,
};
    
dvd.width = dvd.element.offsetWidth,
dvd.height = dvd.element.offsetHeight

// Your randomizeDirection function
function randomizeDirection() {
    dvd.speedX = (Math.random() * 4 + 2) * (Math.random() > 0.5 ? 1 : -1);
    dvd.speedY = (Math.random() * 4 + 2) * (Math.random() > 0.5 ? 1 : -1);
}

// Add the other functions we discussed:
function updatePosition() {
    dvd.x += dvd.speedX;
    dvd.y += dvd.speedY;
    dvd.element.style.left = dvd.x + 'px';
    dvd.element.style.top = dvd.y + 'px';
}

function checkCollision() {
    if (dvd.x + dvd.width >= container.offsetWidth) {
        dvd.speedX = -Math.abs(dvd.speedX);
    }
    if (dvd.x <= 0) {
        dvd.speedX = Math.abs(dvd.speedX);
    }
    if (dvd.y + dvd.height >= container.offsetHeight) {
        dvd.speedY = -Math.abs(dvd.speedY);
    }
    if (dvd.y <= 0) {
        dvd.speedY = Math.abs(dvd.speedY);
    }
}

function gameLoop() {
    updatePosition();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

// Start everything
randomizeDirection();
gameLoop();
