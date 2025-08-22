// filepath: c:\Users\Alfian\Documents\happy-birthday-bro\src\confetti.js
document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF0B0B', '#FF7F0B', '#FFFB0B', '#0BFF0B', '#0B7FFF', '#0B0BFF', '#7F0BFF', '#FF0B7F'];
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createConfetti() {
        const x = randomInt(0, canvas.width);
        const y = randomInt(0, canvas.height);
        const size = randomInt(5, 10);
        const color = colors[randomInt(0, colors.length - 1)];
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.fill();
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
});