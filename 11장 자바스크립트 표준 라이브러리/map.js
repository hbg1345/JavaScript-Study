test = new Map();
test.set("key", 2);
console.log(test); // Map(1) { 'key' => 2 }
console.log(test.get("key")); // 2
console.log(test.has("key")); // true
test.delete("key");
console.log(test); // Map(0) {}
test["key"] = 3;
console.log(test); // Map(0) { key: 3 }