let createdByLiteral = [1,2,3,4,];
let createdByCreator = new Array(5);
let createdByOf = Array.of(4);
let createdByFrom = Array.from(createdByLiteral);
let createdByDistructor = [...createdByCreator];
console.log(
    `literal: ${createdByLiteral}, 
new Array(): ${createdByCreator},
Array.of(): ${createdByOf}, 
Array.from(): ${createdByFrom}, 
...: ${createdByDistructor}`);

/*
literal: 1,2,3,4,
new Array(): ,,,,,
Array.of(): 4,
Array.from(): 1,2,3,4,
...: ,,,,
*/