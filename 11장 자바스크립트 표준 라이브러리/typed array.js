arr = new Int32Array(4);
arr[0] = 4; 
arr[1] = 5;
console.log(arr); // Int32Array(4) [ 4, 0, 0, 0 ]
console.log(Array.isArray(arr)); // false
console.log(arr.length); // 4

console.log(arr.buffer); 
// ArrayBuffer {[Uint8Contents]: <04 00 00 00 05 00 00 00 00 00 00 00 00 00 00 00>, 
// byteLength: 16 }
subarr = arr.subarray(0, 1); // Int32Array(1) [ 4 ]
console.log(subarr);
subarr[0] = 3;
console.log(arr); // Int32Array(4) [ 3, 0, 0, 0 ]

let buffer = arr.buffer;
let view = new DataView(buffer, buffer.byteOffset, buffer.byteLength);
console.log(view);
// DataView {
//   byteLength: 16,
//   byteOffset: 0,
//   buffer: ArrayBuffer {
//     [Uint8Contents]: <03 00 00 00 05 00 00 00 00 00 00 00 00 00 00 00>,
//     byteLength: 16
//   }
// }
console.log(view.getUint8(0)); // 3
console.log(view.getUint8(4)); // 5