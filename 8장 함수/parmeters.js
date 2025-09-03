function f(a, b, c=4) {
    return a+b+c;
}
console.log(f(1, 2)); // 1+2+4 = 7
const args = [3, 5];
console.log(f(...args)); // 3+5+4 = 12. 분해 연산자를 이용한 호출
console.log(f.apply(this, args)); // 12. apply를 사용한 호출
function g(a, b, [c, d]) { // 매개 변수 분해
    return a + b + c;
}
console.log(g(1, 2, [3, 4])); // 1+2+3 = 6
function h(a, b, ...rest_args) { // 분해 연산자를 이용한 정의
    return rest_args;
}
console.log(h(1,2, 3,4,5,6)); // [ 3, 4, 5, 6 ]

