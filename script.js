let current = 1;
let level1 = 3;
let level2 = 5;
let level3 = 8;

function start() {
    startLevel1();
}

function startLevel1() {
    current = 1;
    setTimeout(createCircle, 200, 1, "blue");
    setTimeout(createCircle, 400, 2, "blue");
    setTimeout(createCircle, 600, 3, "blue");
}

function startLevel2() {
    current = 1;
    setTimeout(createCircle, 200, 1, "orange");
    setTimeout(createCircle, 400, 2, "orange");
    setTimeout(createCircle, 600, 3, "orange");
    setTimeout(createCircle, 600, 4, "orange");
    setTimeout(createCircle, 600, 5, "orange");
}

function createCircle(num, color) {
    let circle = document.createElement("div");
    circle.innerText = num;

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "50%";
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

    if (current == level1 + 1) {
        startLevel2();
    }
}

function getRandomX() {
    return Math.random() * (window.innerWidth - 50);
}

function getRandomY() {
    return Math.random() * (window.innerHeight - 50);
}

start();