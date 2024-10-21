const btnPause = document.getElementById("pause");
const btnRestart = document.getElementById("reset");
const arrHour = document.getElementById("arrow-hour");
const arrMinute = document.getElementById("arrow-minute");
let rotateH = 0; //Отдельные rotate, для корректных углов при разных скоростях стрелок
let rotateM = 0;
let active = false;
let idInterval;

const arrowsRotate = () => {
    rotateH += 0.1;
    rotateM += 1;
    if (rotateH > 360) rotateH = 0;
    if (rotateM > 360) rotateM = 0;
    idInterval = requestAnimationFrame(arrowsRotate);

    arrHour.style.transform = "rotate( " + rotateH + "deg)";
    arrMinute.style.transform = "rotate( " + rotateM + "deg)";

}

btnPause.addEventListener('click', () => {
    active = !active;
    if (active) idInterval = requestAnimationFrame(arrowsRotate);
    else cancelAnimationFrame(idInterval);
});

btnRestart.addEventListener('click', () => {
    active = false;
    cancelAnimationFrame(idInterval);
    rotateH = 0;
    rotateM = 0;
    arrHour.style.transform = "rotate(0deg)";
    arrMinute.style.transform = "rotate(0deg)";
});