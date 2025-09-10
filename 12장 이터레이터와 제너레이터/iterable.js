let ret = [1,2,3,4];
for(let x of ret) {
    console.log(x);
}

let iterator = ret[Symbol.iterator]();
let iterator_ret = iterator.next();
console.log(iterator_ret);

