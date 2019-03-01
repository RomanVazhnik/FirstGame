/* eslint-env browser */
var el = document.getElementById("gameArea");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var score = 1;

function endGame() {
    var addedEl = document.createElement("div");
    addedEl.setAttribute("id", "node");
    var winner;
    if (score % 2 === 0) {
        winner = "Крестики вин";
    } else {
        winner = "Нолики вин";
    }
    addedEl.innerHTML = "<h1>Игра закончена</h1>" + winner;
    document.body.appendChild(addedEl);
}

function pressedButtun(e) {
    var target = e.target;
    if (!target.className) {
        if (score % 2 !== 0) {
            target.className = "pressedX";
            ++score;
        } else {
            target.className = "pressedO";
            ++score;
        }
        if ((box1.className === box2.className) && (box1.className === box3.className) && box1.className
        || (box1.className === box4.className) && (box1.className === box7.className) 
        && box1.className
        || (box1.className === box5.className) && (box1.className === box9.className)
        && box1.className
        || (box1.className === box5.className) && (box1.className === box9.className)
        && box1.className
        || (box3.className === box6.className) && (box3.className === box9.className)
        && box3.className
        || (box3.className === box5.className) && (box3.className === box7.className)
        && box3.className
        || (box9.className === box7.className) && (box9.className === box8.className)
        && box9.className
        || (box4.className === box5.className) && (box4.className === box6.className)
        && box4.className
        || (box2.className === box5.className) && (box2.className === box8.className)
        && box2.className) {
           endGame();
        }
    }
}

el.addEventListener("click", function (e) { pressedButtun(e); }, false);