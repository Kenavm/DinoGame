// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector("#dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

document.addEventListener("keydown", function (event) {
    jump();
  });

  let isAlive = setInterval(function () {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  
    // get current cactus X position
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );
  
    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      // collision
      alert("Game Over!");
    }
  }, 10);