"use strict"; // Treat all JS code as per the latest (modern) standard.

// alert(4 - 6); // We are using Node.js, not a browser.

// 🟢 JavaScript Data Types Chart

/*
| 🔢 Type          | 🎯 Name     | 📦 Example                   | 📚 Feature                            |
|------------------|------------|--------------------------------|----------------------------------------|
| ✅ Primitive     | Number     | let a = 10;                    | Numbers (integer, float)               |
|                  | String     | let name = "Atanu";            | For text, written in "" or ''          |
|                  | Boolean    | let isHappy = true;            | Only true or false                     |
|                  | Undefined  | let b;                         | No value assigned yet                  |
|                  | Null       | let c = null;                  | Intentionally empty                    |
|                  | Symbol     | let id = Symbol("id");         | Unique symbol, can't be duplicated     |
|                  | BigInt     | let big = 123456789012345n;    | Very large numbers, ends with n        |
*/

/*
| 🚀 Type            | 📦 Name             | 🧸 Example                      | 📚 Feature                                 |
|--------------------|--------------------|--------------------------------|--------------------------------------------|
| 🟥 Non-Primitive   | Object             | { name: "Ravi", age: 5 }       | Multiple values in key-value pairs         |
|                    | Array              | ["apple", "banana", "mango"]  | List-like, uses index                      |
|                    | Function           | function greet() { ... }       | Performs tasks, reusable                   |
|                    | Date, RegExp, etc. | new Date(), /abc/              | Built-in special object types              |
*/

// 🧠 Tips to Remember:

/*
| Topic             | Primitive                           | Non-Primitive                           |
|------------------|-------------------------------------|-----------------------------------------|
| Stored in memory | Direct value                        | Reference (pointer)                     |
| Mutability       | Immutable (cannot be changed)       | Mutable (values inside can be changed)  |
| Compared by      | Value                               | Reference                               |
| Examples         | 10, "Hi", true                      | {}, [], function() {}                   |
*/

// ✅ Type Checking Examples:

let a = 10;
console.log(typeof a); // number

let b = "hello";
console.log(typeof b); // string

let c;
console.log(typeof c); // undefined

let d = null;
console.log(typeof d); // object (an old bug in JavaScript 😅)

console.log(typeof undefined); // undefined
console.log(typeof null);      // object


/*
📘 JavaScript: Primitive vs Non-Primitive Data Types

| Topic 💡            | Primitive                      | Non-Primitive                    |
|---------------------|--------------------------------|----------------------------------|
| How value is stored | Single value                   | Multiple values or functions     |
| Memory usage        | Uses small memory              | Uses more memory                 |
| Copy behavior       | Makes a new copy (value copy)  | Copies the address (reference)   |
| Comparison with ==  | Compares value                 | Compares reference (address)     |
| Comparison with === | Compares value & type          | Compares reference (address)     |

------------------------------------------------
🧪 Code Example:

let e = 5;         // Primitive (Number)
let f = e;         // f = 5 (makes a new copy)

let obj1 = { name: "Atanu" };   // Non-Primitive (Object)
let obj2 = obj1;                // obj2 points to the same object

obj2.name = "Mita";

console.log(obj1.name);  // Output: "Mita"

🧠 Why?
Because obj1 and obj2 point to the same memory (same object),
so changing obj2 also changes obj1.

***
const outSideTemp = null;   // defined as null (empty on purpose)
let userEmail;              // declared but not assigned (undefined)
***

*/