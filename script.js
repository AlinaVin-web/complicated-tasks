"use strict";

let text = prompt("Введите строку", "");

const stringEditor = function (str) {
    if (typeof str !== "string") {
        alert("Вы не ввели строку!");
        return;
    }
    str = str.trim();
    if (str.length > 30) alert(str.slice(0, 30) + "...");
    else alert(str);
    return;
}

stringEditor(text);