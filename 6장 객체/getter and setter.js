const symbol = Symbol();
let a = {
    [symbol]: "value is this.",
    get val() {return this[symbol];},
    set val(_val) {this[symbol] = _val;},
    print() { console.log("print function is called."); },
};

console.log(a.val);
a.val = 2;
console.log(a.val);
a.print();