let a = [3,23, 4,1];
a.sort();
console.log(a); // [ 1, 23, 3, 4 ]
a.sort((a, b) => a-b); 
console.log(a); // [ 1, 3, 4, 23 ]
a.reverse();
console.log(a); // [ 23, 4, 3, 1 ]
console.log("4의 위치:", a.indexOf(4)); // 1
console.log("4의 위치:", a.lastIndexOf(4, 0));  // -1
// 뒤에서부터 검사하는데, 첫째부터 검사하므로 4를 찾지 못한다.
console.log(a.join("구분문자열")); // 23구분문자열4구분문자열3구분문자열1
console.log(Array.isArray(a)); // true
let b = {"0": 22, "1": 33, "length": 2};
console.log(Array.isArray(b)); // false
let c = Array.from(b);
console.log(Array.isArray(c)); // true