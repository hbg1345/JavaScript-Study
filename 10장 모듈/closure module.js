const module1 = (function() {
    function add(x, y) {
        return x+y;
    }
    function sub(x, y) {
        return x-y;
    }
    const exports = {add, sub};
    return exports;
}());
const ret1 = module1.add(1,2); // 3
const ret2 = module1.sub(1,2); // -1
console.log(ret1, ret2);





