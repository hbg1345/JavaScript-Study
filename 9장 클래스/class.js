class Test {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
}
let instance = new Test(1, 2);
console.log(instance.x, instance.y);
console.log(Test.prototype.constructor); // [class Test]
console.log(instance.add()); // 3
class Test2 extends Test {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    add() {
        return super.add() + this.z;
    }
    static y() {
        console.log("static function called.");
    }
}
let instance2 = new Test2(1, 2, 3);
console.log(instance2.add()); // 6
Test2.y();