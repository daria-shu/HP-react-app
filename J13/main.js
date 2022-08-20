let tank = document.querySelector(".sprite");
let gameField = document.querySelector(".container");
let scoreField = document.querySelector(".score");
let counter = 0;
let score = 0;

let bullets = [];
let dinos  = [];
let intervalId;

document.addEventListener('keypress', getKeyPressed, false )

function getKeyPressed(ev) {
  if (ev.key === "w") {
      moveTank(ev.key)
  } else if (ev.key === "z") {
      moveTank(ev.key)
  } else if (ev.key === "k") {
      addBullet()
  }
}
function moveTank(key) {
    let top = window.getComputedStyle(tank, null).top
    let topPosY = Number(top.replace("px", ""))
    if (key === "w" && topPosY > 0) {
        topPosY -= 10
    } else if (key === "z" && topPosY < 600) {
        topPosY += 10
    }
    tank.style.top = topPosY + "px"
}

function addBullet() {
    let top = window.getComputedStyle(tank, null).top
    let topPosY = Number(top.replace("px", ""))
    let x = 310
    let y = topPosY + 100
    let html = `<div id="bull${bullets.length}" class="bullet" style="position: absolute; left: ${x}px;
    top: ${y}px; width: 20px; height: 20px; border: solid 3px red; border-radius: 50%; background-color: crimson "></div>`
    gameField.insertAdjacentHTML('beforeend', html)
    bullets.push(document.querySelector(`#bull${bullets.length}`))
}

function moveBullet() {
    bullets.map((bull) => {
        let left = bull.style.left;
        let x = Number(left.replace("px", ""));
        if (x < 1480) {
            x++;
            bull.style.left = x + "px";
        } else {
            bull.remove()
        }

    })

}

function gameLoop() {
    counter++

    if ((counter % 200) === 0) {
        addDino()
    }
    if (bullets.length > 0) {
        moveBullet();
        updateBulls();
    }
    if (dinos.length > 0) {
        moveDino();
        killsDino();
        updateScore();
        updateDinos();

    }

}

function start() {
    let legend = document.querySelector(".legend")
    legend.remove()
    intervalId = setInterval(gameLoop, 10)
}

function updateBulls() {
    bullets = Array.from(document.querySelectorAll(".bullet"))
}

function addDino() {
    let y = Math.ceil((Math.random() * 10000) % 600);
    let x = 1300;
    let en = Math.ceil((Math.random() * 100) % 12);
    let html = `<div id="dino${dinos.length}" class="dinos" style="position: absolute; left: ${x}px;
    top: ${y}px; width: 200px; height: 100px"> <img src="sprite/enemy${en}.png" width="200" height="100"></div>`
    gameField.insertAdjacentHTML('beforeend', html)
    dinos.push(document.querySelector(`#dino${dinos.length}`))
}

function moveDino() {
    dinos.map((dino) => {
        let left = dino.style.left;
        let x = Number(left.replace("px", ""));
        if (x > 0) {
            x--;
            dino.style.left = x + "px";
        } else {
            gameOver()
        }

    })

}
function gameOver() {
    clearInterval(intervalId);
    let html = "<div style='position: absolute; top: 400px; left: 500px; font-size: 5em; " +
        "font-weight: bold; color: coral'>GAME OVER</div>";
    gameField.insertAdjacentHTML('beforeend', html);
}

function updateDinos() {
    dinos = Array.from(document.querySelectorAll(".dinos"))
}
function killsDino() {
    dinos.map((dino) => {
        let dinoX = dino.style.left;
        dinoX = Number(dinoX.replace("px", ""));
        let dinoY = dino.style.top;
        dinoY = Number(dinoY.replace("px", ""));
        bullets.map((bull) => {
            let bullX = bull.style.left;
            bullX = Number(bullX.replace("px", ""));
            let bullY = bull.style.top;
            bullY = Number(bullY.replace("px", ""));
            if (dinoX < bullX && dinoY - 15 < bullY && dinoY + 200 > bullY) {
                dino.remove();
                bull.remove();
                score += 1;
            }
        })

    })
}
function updateScore() {
    scoreField.innerHTML = `<p style="font-size: 2.5em; position:absolute; left: 1300px; color: chocolate">Score: ${score}</p>`
}