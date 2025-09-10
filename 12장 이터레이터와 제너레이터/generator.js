function* gen() {
    yield "wow";
    let c = 4;
    yield c;
}

for(let x of gen()) {
    console.log(x); // wow // 4
}

console.log([...gen()]); // [ 'wow', 4 ]

