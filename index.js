// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;
const DINO_EL = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const scoreDiv = document.querySelector("#score");

let cactusLeft = parseInt(
window.getComputedStyle(cactus).getPropertyValue("left")
);

function jump() {
if (DINO_EL.classList != "jump") {
DINO_EL.classList.add("jump");

setTimeout(function () {
DINO_EL.classList.remove("jump");
}, 500);
}
}
let score = 0;
document.addEventListener("keydown", function (event) {
jump();
});

let isAlive = setInterval(function () {
let dinoTop = parseInt(window.getComputedStyle(DINO_EL).getPropertyValue("top"));
let dinoBottom = parseInt(window.getComputedStyle(DINO_EL).getPropertyValue("bottom"));

let cactusLeft = parseInt(
window.getComputedStyle(cactus).getPropertyValue("left")
);
if (cactusLeft < 110 && cactusLeft > 60 && dinoBottom <= 49) {
score = 0;
scoreDiv.textContent = score;

alert("Game Over!");
}
let cactusPassed = false;
console.log('A' + cactusPassed)

if(cactusLeft < 40 && !cactusPassed){
  cactusPassed = true;
console.log('B' + cactusPassed)
score++;
scoreDiv.textContent = score;
}
}, 10);