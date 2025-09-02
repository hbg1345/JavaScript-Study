"use strict";
label1: for(;;) {
    break label1;
}

let a = [3, 2, 5, 2321];
for(let elem of a) {
    console.log(elem); debugger
}

for(let key in a) {
    console.log(key);
}

for(let key of a.keys()) {
    console.log(key);
}

for(let [k, v] of a.entries()) {
    console.log(k, v);
}

let example_object = {name:"js", value: 32};
for(let k in example_object) {
    console.log(k);
}

export default function f(x) {return x;}