test = new Set();
test.add(1);
console.log(test); // Set(1) { 1 }
console.log(test.has(1)); // true
test.delete(1);
console.log(test); // Set(0) {}
console.log(test.has(1)); // false
