let a = [1,2,3,4];
for(let i=0; i<a.length; i++) {
    console.log(a[i]);
}
for(let [k, v] of a.entries()) {
    console.log(k, v);
}
for(let k in a) {
    console.log(k, a[k]);
}
let sum = 0;
a.forEach(function(v, i, a) {sum += v});
console.log(sum);
console.log("map 결과: ", a.map((v, i, a) => v+1));
console.log("reduce 결과: ", a.reduce(function(acc, v, i, a) {acc += v+a[i]; return acc}, 0));
console.log("filter 결과: ", a.filter(function(v, i, a) {return v > 1;}));
console.log("some 결과: ", a.some(function(v, i, a) {return v > 1;}));
console.log("every 결과: ", a.every(v => v > 0));
console.log("find 결과: ", a.find(v => v === 2));
console.log("findIndex 결과: ", a.findIndex(v => v === 2));
/*
map 결과:  [ 2, 3, 4, 5 ]
reduce 결과:  20
filter 결과:  [ 2, 3, 4 ]
some 결과:  true
every 결과:  true
*/