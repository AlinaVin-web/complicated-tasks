"use strict";

const body = document.querySelector('body');
let now;

function timeWords(h, m, s) {
    let result = "" + h;

    if (h === 1 || h === 21) result += " час ";
    else if (h === 0 || (h >= 5 && h <= 20)) result += " часов ";
    else result += " часа ";
    result += m;

    if (m % 10 === 1 && m !== 11) result += " минута ";
    else if (m % 10 >= 2 && m % 10 <= 4 && (m < 12 || m > 14)) result += " минуты ";
    else result += " минут ";
    result += s;

    if (s % 10 === 1 && s !== 11) result += " секунда ";
    else if (s % 10 >= 2 && s % 10 <= 4 && (s < 12 || s > 14)) result += " секунды ";
    else result += " секунд";

    return result;
}
const dateLongFormat = function (date) {
    let str = "Сегодня ";
    let weekDay = new Intl.DateTimeFormat('ru', { weekday: "long" }).format(date);
    str += weekDay[0].toUpperCase() + weekDay.slice(1) + ", ";
    str += new Intl.DateTimeFormat('ru', { month: "long", day: "numeric" }).format(date) + " ";
    str += date.getFullYear() + " года, ";
    str += timeWords(date.getHours(), date.getMinutes(), date.getSeconds());
    return str;
}
const dateShortFormat = function (date) {
    let str = "";
    str += new Intl.DateTimeFormat('ru', { dateStyle: "short" }).format(date) + " - ";
    str += new Intl.DateTimeFormat('ru', { timeStyle: "medium" }).format(date)
    return str;
}

setInterval(function () {
    now = new Date();
    body.innerHTML = dateLongFormat(now) + "<br/>" + dateShortFormat(now);
}, 1000);

