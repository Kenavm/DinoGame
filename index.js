const WIDTH = 800;
const HEIGHT = 256;
const CACTUS_LEFT_MAX = 118.5
const CACTUS_LEFT_MIN = 58
const DINO_TOP_HEIGHT = 185
const CACTUS_PASSED_DINO = 40

const dino_el = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const scoreDiv = document.querySelector("#score");
const highScoreDiv = document.querySelector(".highscore-point");
let highScoreStorage = localStorage.getItem("HIGH SCORE: ");
highScoreDiv.textContent = highScoreStorage;
// localStorage.clear();

let highScoreVar = 0;
let score = 0;

let cactusLeft = parseInt(
  window.getComputedStyle(cactus).getPropertyValue("left")
);

function jump() {
  if (dino_el.classList !== "jump") {
    dino_el.classList.add("jump");
    setTimeout(() => dino_el.classList.remove("jump"), 500);
  }
}

document.addEventListener("keydown", () => jump());

function main() {
  let dinoTop = parseInt(
    window.getComputedStyle(dino_el).getPropertyValue("top")
  );

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < CACTUS_LEFT_MAX && cactusLeft > CACTUS_LEFT_MIN && dinoTop >= DINO_TOP_HEIGHT) {
    score = 0;
    scoreDiv.textContent = score;
    alert("Game Over!");
  }
  scoreCheck(cactusLeft);
}

let isAlive = setInterval(main, 10);

function scoreCheck(cactusPos) {
  let cactusPassed = false;
  let scoreCountBreak = 0;

  // TODO - introduce a named constant for the value 22
  scoreDiv.textContent = Math.floor(score / 22);
  if (cactusPos < CACTUS_PASSED_DINO && !cactusPassed) {
    score++;

    if (
      (scoreCountBreak ===
        0 && cactusPos < CACTUS_PASSED_DINO && scoreDiv.textContent - scoreDiv.textContent < 1)
    ) {
      scoreCountBreak = 1;
      scoreDiv.textContent  += 1;
    } 
    scoreCountBreak = 0;
  }
  saveHighScore(score);
}

function saveHighScore(currentHighScore) {
  if (Math.floor(currentHighScore / 22) - highScoreStorage > 0) {
    highScoreVar = Math.floor(currentHighScore / 22);
    localStorage.setItem("HIGH SCORE: ", highScoreVar);
    highScoreStorage = localStorage.getItem("HIGH SCORE: ");
    highScoreDiv.innerHTML = highScoreStorage;
  }
}