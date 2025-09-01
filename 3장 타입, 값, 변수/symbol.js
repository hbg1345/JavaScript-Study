let shared = Symbol.for("fxxf");
let shared2 = Symbol.for("fxxf");

let o = {};
o[shared] = 1;
o[shared2] = 2;
console.log(o);
console.log(Symbol.keyFor(shared));
let y = Symbol("fxxf");
console.log(o[y], y === shared) // undefined, false