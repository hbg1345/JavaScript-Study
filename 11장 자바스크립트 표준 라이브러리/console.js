console.table({"x": 1, "y": 2});
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │ x       │ 1      │
// │ y       │ 2      │
// └─────────┴────────┘
function test() {}
console.count(test);
console.count(test);
// function test() {}: 1
// function test() {}: 2

console.time(test);
console.timeLog(test);
console.timeLog(test);
console.timeEnd(test);
// function test() {}: 0.006ms
// function test() {}: 0.118ms
// function test() {}: 0.343ms