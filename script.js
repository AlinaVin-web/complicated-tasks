"use strict";

const body = document.querySelector('body');
let now = new Date();
let day = now.getDay() - 1;
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

for (let i = 0; i < week.length; i++) {
    let style = "";

    if (i > 4) style = "font-style: italic;";

    if ((day > -1 && day === i) || (day === -1 && i === 6)) style += "font-weight: 700;";

    if (style) body.insertAdjacentHTML("beforeend", "<p style='" + style + "'>" + week[i] + "</p>");
    else body.insertAdjacentHTML("beforeend", "<p>" + week[i] + "</p>");
}