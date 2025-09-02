let a = {x:1};
let b = Object.assign({}, a); // 열거 가능한 자체 프로퍼티만을 복사.
let c = {...a};
console.log(b);
console.log(c);

let d = Object.create(a); // 상속
console.log(d); // => {}
console.log(d.x); // => 1
