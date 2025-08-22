const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

const colors = ['#f9d423', '#ff4e50', '#1e90ff', '#43e97b', '#f67280', '#c06c84', '#6c5b7b'];
const confettiCount = 120;
const confetti = [];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Confetto() {
  this.x = randomInt(0, W);
  this.y = randomInt(-H, 0);
  this.r = randomInt(5, 10);
  this.color = colors[randomInt(0, colors.length - 1)];
  this.speed = randomInt(2, 5);
  this.tilt = randomInt(-10, 10);
}

for (let i = 0; i < confettiCount; i++) {
  confetti.push(new Confetto());
}

function drawConfetti() {
  ctx.clearRect(0, 0, W, H);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += c.speed;
    c.x += Math.sin(c.y / 30) * 2;
    if (c.y > H) {
      c.x = randomInt(0, W);
      c.y = randomInt(-20, 0);
      c.color = colors[randomInt(0, colors.length - 1)];
    }
  });
}

window.addEventListener('resize', () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});

drawConfetti();