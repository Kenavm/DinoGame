// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector("#dino");
const CACTUS = document.getElementById("cactus");

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
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(DINO_EL).getPropertyValue("top"));
  
    // get current cactus X position
    let cactusLeft = parseInt(
      window.getComputedStyle(CACTUS).getPropertyValue("left")
    );
  
    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      // collision
      alert("Game Over!");
    }
  }, 10);