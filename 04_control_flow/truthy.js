/*
✅ What is truthy or falsy?
Your robot friend checks if something is empty or full:
- Falsy → like empty boxes. Robot thinks they’re false.
- Truthy → something inside, even a tiny thing.

✅ Falsy values:
- false
- 0
- -0
- BigInt 0n
- "" (empty string)
- null
- undefined
- NaN

✅ Truthy values:
- "0"
- " " (space)
- [] (empty array)
- {} (empty object)
- function() {} (empty function)
 
✅ Checking arrays and objects:
- An empty array ([]) is truthy, but its length is 0.
- An empty object ({}) is truthy, but its keys length is 0.

✅ Nullish Coalescing Operator (??)
If the left value is null or undefined, robot uses the right value instead.

Example:
val1 = null ?? 10 → robot uses 10
val1 = 5 ?? 10 → robot keeps 5

✅ Ternary Operator
Quick way to write an if...else in one line:
condition ? do if true : do if false

*/

const userEmail = [];

if (userEmail) {
  console.log("Got user email"); // Got user email (because [] is truthy)
} else {
  console.log("Don't have user email");
}

if (userEmail.length === 0) {
  console.log("Array is empty"); // Array is empty
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty"); // Object is empty
}

// Nullish Coalescing Operator (??): null or undefined
let val1;
val1 = null ?? 10 ?? 20;
console.log(val1); // 10, cause (??) return the first truthy value and left.

// Ternary Operator
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // more than 80
