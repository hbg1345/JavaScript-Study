function f(x) {
    return x;
}
f(1); // => 1
f?.(2); // => 2
let x;
x?.(1); // => undefined
x(1); // => TypeError: x is not a function