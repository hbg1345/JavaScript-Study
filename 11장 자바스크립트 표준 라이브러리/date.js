now = new Date();
console.log(now); // 2025-09-10T11:28:31.577Z
date = new Date(2321, 9, 9, 2, 59, 1); // 2321-10-08T17:59:01.000Z
console.log(date);
console.log(date.getFullYear(), 
            date.getMonth(), 
            date.getDate(), 
            date.getHours(), 
            date.getMinutes(),
            date.getSeconds(), 
            date.getMilliseconds());
// 2321 9 9 2 59 1 0
console.log(date.getDay()); // 0
console.log(date.toLocaleString()); // 2321. 10. 9. 오전 2:59:01
console.log(`1970년 1월 1일부터 ${date.getTime()} ms 경과함.`);
// 1970년 1월 1일부터 11100736741000 ms 경과함.
date.setTime(0);
console.log(date); // 1970-01-01T00:00:00.000Z