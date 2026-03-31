let current = 1;
let level1 = 4;
let level2 = 9;
let level3 = 16;

function start() {
    startLevel1();
}

function startLevel1() {
    current = 1;
    level = 1;
    setTimeout(createCircle, 200, 1, "blue");
    setTimeout(createCircle, 400, 2, "blue");
    setTimeout(createCircle, 600, 3, "blue");
}

function startLevel2() {
    setTimeout(createCircle, 200, 4, "orange");
    setTimeout(createCircle, 400, 5, "orange");
    setTimeout(createCircle, 600, 6, "orange");
    setTimeout(createCircle, 800, 7, "orange");
    setTimeout(createCircle, 1000, 8, "orange");
}

function startLevel3() {
    setTimeout(createCircle, 200, 9, "red");
    setTimeout(createCircle, 400, 10, "red");
    setTimeout(createCircle, 600, 11, "red");
    setTimeout(createCircle, 800, 12, "red");
    setTimeout(createCircle, 1000, 13, "red");
    setTimeout(createCircle, 1200, 14, "red");
    setTimeout(createCircle, 1400, 15, "red");
}

function createCircle(num, color) {
    let circle = document.createElement("div");
    circle.innerText = num;

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "12px";
    circle.style.backgroundColor = color;
    circle.style.color = "white";
    circle.style.alignContent = "center";
    circle.style.textAlign = "center";
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    circle.addEventListener("click", handleCircleClick);

    document.body.appendChild(circle);
}

function handleCircleClick(event) {
    let circle = event.target;
    console.log(circle.innerText);
    if (circle.innerText == current) {
        current++;
        circle.remove();
    }

    if (current == level1) {
        startLevel2();
    }
    else if (current == level2) {
        startLevel3();
    }
    else if (current == level3) {
        alert("You won!");
    }
}

function getRandomX() {
    return Math.random() * (window.innerWidth - 50);
}

function getRandomY() {
    return Math.random() * (window.innerHeight - 50);
}

start();