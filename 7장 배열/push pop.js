let a = [1,2,3,4];
a.push(5);
console.log("after push", a);
a.pop();
console.log("after pop", a);
a.push(1, 2);
console.log("after push(1,2)", a);
a.push([1, 2]);
console.log("after push[1,2]", a);
a.shift();
console.log("after unshift", a);
a.unshift(2, 4);
console.log("after unshift(2, 4)", a);

/*
after push [ 1, 2, 3, 4, 5 ]
after pop [ 1, 2, 3, 4 ]
after push(1,2) [ 1, 2, 3, 4, 1, 2 ]
after push[1,2] [ 1, 2, 3, 4, 1, 2, [ 1, 2 ] ]
after unshift [ 2, 3, 4, 1, 2, [ 1, 2 ] ]
after unshift(2, 4) [ 2, 4, 2, 3, 4, 1, 2, [ 1, 2 ] ]
*/