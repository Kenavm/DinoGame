const WIDTH = 800;
const HEIGHT = 256;
const DINO_EL = document.querySelector("#dino");
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
  if (DINO_EL.classList != "jump") {
    DINO_EL.classList.add("jump");
    setTimeout(function () {
      DINO_EL.classList.remove("jump");
    }, 500);
  }
}

document.addEventListener("keydown", function (event) {
  jump();
});

let isAlive = setInterval(function () {
  let dinoTop = parseInt(
    window.getComputedStyle(DINO_EL).getPropertyValue("top")
  );
  let dinoBottom = parseInt(
    window.getComputedStyle(DINO_EL).getPropertyValue("bottom")
  );

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 118.5 && cactusLeft > 58 && dinoTop >= 185) {
    score = 0;
    scoreDiv.textContent = score;
    alert("Game Over!");
  }
  scoreCheck(cactusLeft);
}, 10);

function scoreCheck(a) {
  let cactusPassed = false;
  let scoreCountBreak = 0;

  if (a < 40 && !cactusPassed) {
    score++;

    if (
      (scoreCountBreak =
        0 && a < 40 && Math.floor(score / 22) - scoreDiv.textContent < 1)
    ) {
      scoreCountBreak = 1;
      scoreDiv.textContent = Math.floor(score / 22) + 1;
    } else {
      scoreDiv.textContent = Math.floor(score / 22);
    }
    scoreCountBreak = 0;
  }
  highScoreSaver(score);
}

function highScoreSaver(CurrentHighScore) {
  if (Math.floor(CurrentHighScore / 22) - highScoreStorage > 0) {
    highScoreVar = Math.floor(CurrentHighScore / 22);
    localStorage.setItem("HIGH SCORE: ", highScoreVar);
    highScoreStorage = localStorage.getItem("HIGH SCORE: ");
    highScoreDiv.innerHTML = highScoreStorage;
  }
}
