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
