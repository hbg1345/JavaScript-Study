function f(x) { // 함수 리터럴
    return x+1;
}
const g = function(x) { // 함수 표현식
    return x+1;
};
const h = (x) => { // 람다 함수
    x+1
};
const l = new Function("x", "return x+1;"); // 생성자
console.log(l(1)); // 2