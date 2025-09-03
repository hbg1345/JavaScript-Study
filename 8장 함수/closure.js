function f() {
    let t = 0;
    const g = (x) => {
        t = x > t ? x: t;
        return t;
    };
    return g;
}
const u = f();
console.log(u(1)); // 1
console.log(u(0)); // 1

(function() {
    let u = 323;
    let v = 1;
    console.log(u+v);
}()); //324. 즉시 함수 호출

const pow2 = Math.pow.bind(null, 2); // 부분 적용
console.log(pow2(4)); // 2^4 = 16

function k(g) {
    return function(...args)  {
        return g.apply(this, args)
    };
}

k.some_pro = 3;
const g = (x, y) => x+y;
const kg = k(g);
console.log(kg(1, 4)); // 5
