// PAGE NAVIGATION
function nextPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + page).classList.add("active");
}

// YES BUTTON
function yesAnswer() {
  document.getElementById("response").innerHTML =
    "She said YES! 💍❤️ We will look like this 🤣💖";

  // Smooth image reveal
  document.getElementById("yesImageContainer").classList.add("show");

  startFireworks();
  const music = document.getElementById("yesMusic");
music.volume = 0.8;
music.play();
}

// NO BUTTON (playful)
function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

// FIREWORKS
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {
  for (let i = 0; i < 260; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360},100%,60%)`,
      vx: Math.random() * 6 - 3,
      vy: Math.random() * 6 - 3,
      life: 110
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  });
  if (particles.length > 0) requestAnimationFrame(animate);
}