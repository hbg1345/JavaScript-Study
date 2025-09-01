// 배열에서의 분해 할당
let x = [1,2,3,4];
const [a, ... b] = x;
console.log(a, b);

let [c, ,d] = x;
console.log(c, d);

// 함수에서의 분해 할당
function add(x, y) {
    return [x+y, x-y];
}
let [ret1, ret2] = add(0, 1);
console.log(ret1, ret2);

// 객체에서의 분해 할당
let object = {x: 1, y:2}
const {x:x1, y:y1} = object; // 저자가 비추천하는 방식.
console.log(x1, y1);

let object2 = {u: 0, v:-2};
const {u, v} = object2; // 저자가 추천하는 방식.
console.log(u, v);
