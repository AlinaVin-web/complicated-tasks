"use strict";

let num = 266219;
let result = 1;

num = num + "".split("");

for (let v of num) {
    result *= +v;
}

result = result ** 3 + "".split("");

console.log(result[0], result[1]);