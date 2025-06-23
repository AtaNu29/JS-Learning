// ✅ What is an Array?
let basket = ["apple", "banana", "mango"];
// An Array is like a toy basket – it holds many things together.

// ✅ Check if something is an array – Array.isArray()
let toys = ["car", "ball", "doll"];
console.log(Array.isArray(toys)); // true

let name = "Atanu";
console.log(Array.isArray(name)); // false

// ✅ Create an array from something – Array.from()
let name2 = "Atanu";
let letters = Array.from(name2);
console.log(letters); // ['A', 't', 'a', 'n', 'u']

// ✅ Create a new array – Array.of()
let fruits = Array.of("apple", "banana", "cherry");
console.log(fruits); // ["apple", "banana", "cherry"]

// ✅ Flatten nested arrays – flat()
let box = [1, 2, [3, 4], 5];
let flatBox = box.flat();
console.log(flatBox); // [1, 2, 3, 4, 5]

// ✅ Add an item to the array – push()
let animals = ["cat", "dog"];
animals.push("cow");
console.log(animals); // ["cat", "dog", "cow"]

// ✅ Join two arrays – concat()
let boys = ["Rohan", "Amit"];
let girls = ["Sita", "Rita"];
let allKids = boys.concat(girls);
console.log(allKids); // ["Rohan", "Amit", "Sita", "Rita"]

// ✅ Summary Table (for memory):

/*
| Function       | What it does                                 |
|----------------|----------------------------------------------|
| isArray()      | Checks if it is an array                     |
| from()         | Makes a new array from something             |
| of()           | Makes a new array from the given items       |
| flat()         | Flattens inner arrays into a single array    |
| push()         | Adds item to the end of the array            |
| concat()       | Joins two or more arrays                     |
*/
