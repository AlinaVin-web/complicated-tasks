"use strict";

let lang = 'ru';
const ruWeek = "Пн, Вт, Ср, Чт, Пт, Сб, Вс";
const enWeek = "Mon, Tue, Wed, Thu, Fri, Sat, Sun";
let arrWeek = [];
let namePerson = "";

arrWeek['ru'] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
arrWeek['en'] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

lang = confirm("Вывести дни недели на русском языке?");
lang ? lang = "ru" : lang = "en";

if (lang == "ru") {
    console.log(ruWeek);
} else {
    console.log(enWeek);
}

switch (lang) {
    case "ru":
        console.log(ruWeek);
        break;
    case "en":
        console.log(enWeek);
        break;
}

console.log(arrWeek[lang].join(", "));

namePerson = prompt("Введите имя", "Артем");

namePerson == "Артем" ?
    console.log("Директор") :
    namePerson == "Александр" ?
        console.log("Преподаватель") : console.log("Студент");