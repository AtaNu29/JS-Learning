"use strict"; // treate all JS code as newer version.

// alert(4 - 6); // we are ushing node-JS not browser.

// 🟢 JavaScript Data Types Chart
/*
| 🔢 ধরণ (Type)  |🎯 নাম [Name] | 📦 উদাহরণ [Example]     | 📚 বৈশিষ্ট্য (Feature)          |
| --------------- | --------- | ----------------------------- | ------------------------------- |
| ✅ **Primitive** | Number    | `let a = 10;`                 | সংখ্যা (integer, float)         |
|                 | String    | `let name = "Atanu";`         | লেখার জন্য, " " বা ' ' এর মধ্যে |
|                 | Boolean   | `let isHappy = true;`         | শুধু `true` বা `false`          |
|                 | Undefined | `let b;`                      | কিছু মান দেওয়া হয়নি             |
|                 | Null      | `let c = null;`               | ইচ্ছাকৃত খালি                   |
|                 | Symbol    | `let id = Symbol("id");`      | ইউনিক চিহ্ন, অদ্বিতীয়           |
|                 | BigInt    | `let big = 123456789012345n;` | অনেক বড় সংখ্যা, শেষে `n` থাকে   |
*/
/*
| 🚀 ধরণ (Type)        | 📦 নাম  [Name]     | 🧸 উদাহরণ [Example]          | 📚 বৈশিষ্ট্য (Feature)              |
| -------------------- | ------------------ | ------------------------------ | ----------------------------------- |
| 🟥 **Non-Primitive** | Object             | `{name: "Ravi", age: 5}`       | একাধিক মান একসাথে, key-value format |
|                      | Array              | `["apple", "banana", "mango"]` | তালিকা বা লিস্ট, index ভিত্তিক      |
|                      | Function           | `function greet() { ... }`     | কাজ করতে পারে, পুনরায় ব্যবহারযোগ্য  |
|                      | Date, RegExp, etc. | `new Date()`, `/abc/`          | Built-in special object types       |

*/
// 🧠 মনে রাখার টিপস [Tips]:
/*
| Topic             | Primitive                     | Non-Primitive                   |
| ----------------- | ----------------------------- | ------------------------------- |
| Stored in memory  | Value directly                | Reference (Pointer)             |
| Mutable/Immutable | Immutable (মান বদলানো যায় না) | Mutable (ভিতরের মান বদলানো যায়) |
| Compared by       | Value                         | Reference                       |
| Examples          | `10`, `"Hi"`, `true`          | `{}`, `[]`, `function() {}`     |
*/


let a = 10;
console.log(typeof a); // number

let b = "hello";
console.log(typeof b); // string

let c;
console.log(typeof c); // undefined

let d = null;
console.log(typeof d); // object (JavaScript-এর পুরনো ভুল 😅)

console.log(typeof undefined); // undefined
console.log(typeof null); // object