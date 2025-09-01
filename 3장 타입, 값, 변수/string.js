let string = 'it\' raining!! \
I\'m so happy \b \v wow'
console.log(string);

console.log(string.substring(1, 5));
console.log(string.toUpperCase()); 
console.log(string.slice(-3));  // wow
console.log(string.indexOf('i')); // 0
console.log(string[0]);

let x = 4;
console.log(`x: ${x}`)