function Computer(x, y) {
    this.x = x;
    this.y = y;
}

Computer.prototype = {
    add() {
        return this.x + this.y;
    },
    z: 1, 
}

let comp = new Computer(1, 2);
console.log(comp.add()); // 3
console.log(comp.z); // 1