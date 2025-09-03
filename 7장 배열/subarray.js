let a = [1, 2, 3, 4];
console.log("slice(1,3): ", a.slice(1, 3));
a.fill(0, 1, 3);
console.log(a); // => [ 1, 0, 0, 4 ]
a.splice(1, 1, [0, 0]); // 제거 후 삽입
console.log(a); // => [ 1, [ 0, 0 ], 0, 4 ]
a = a.flat();
console.log(a); // => [ 1, 0, 0, 0, 4 ]
a.copyWithin(2, 0, 2); // 그냥 변경
console.log(a); // => [ 1, 0, 1, 0, 4 ]

