let pattern = /[A-Z]?[0-9]?/u;
let target = "A10";
console.log(target.match(pattern)); 
// [ 'A1', index: 0, input: 'A10', groups: undefined ]
console.log(target.search(pattern)); // 0
let pattern2 = /[A-Z]?[0-9]?/gu;
console.log(target.match(pattern2));
// [ 'A1', '0', '' ]
console.log(target.replace(pattern, "replaced"));
// replaced0
console.log(target);
// A10
for(let x of target.matchAll(pattern2)) {
    console.log(x[0], x.index, x.input, x.groups);
    // A1 0 A10 undefined
    // 0 2 A10 undefined
    // 3 A10 undefined
}

let pattern3 = /(?<sub>[0-9])/u;
console.log(target.replace(pattern3, "$<sub>=one"));
// A1=one0

console.log(pattern.test("test string")); // true
console.log(pattern.exec("test string")); 
// [ '', index: 0, input: 'test string', groups: undefined ]

target = "splitted string";
regExp = / /;
console.log(target.split(regExp));
// [ 'splitted', 'string' ]