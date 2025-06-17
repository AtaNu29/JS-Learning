"use strict";
/*
📘 JavaScript: Stack vs Heap Memory

------------------------------------------------
🧠 What is Memory in JavaScript?

JavaScript uses 2 types of memory:
🔹 Stack → for small/simple data (like Primitive values )
🔹 Heap → for big/complex data (like Non-Primitive values)

------------------------------------------------
📦 Stack Memory

✔️ Stores: Primitive values  
✔️ Examples: number, string, boolean, null, undefined, symbol, bigint  
✔️ Fast access (uses LIFO: Last In First Out)  
✔️ Stored by VALUE  
✔️ Auto-managed

🧪 Example:
let a = 10;  
let b = a;  
b = 20;  
console.log(a); // Output: 10 ✅

📌 a and b are separate values in stack.

------------------------------------------------
🏗️ Heap Memory

✔️ Stores: Non-Primitive values  
✔️ Examples: object, array, function  
✔️ Slower than stack  
✔️ Stored by REFERENCE (pointer/address)  
✔️ Managed by garbage collector

🧪 Example:
let obj1 = { name: "Atanu" };  
let obj2 = obj1;  
obj2.name = "Mita";  
console.log(obj1.name); // Output: "Mita" ✅

📌 obj1 and obj2 point to the same object in heap.

------------------------------------------------
📊 Stack vs Heap Comparison:

| Feature         | Stack                       | Heap                        |
|------------------|-----------------------------|------------------------------|
| Data Type        | Primitive                   | Non-Primitive                |
| Storage Type     | Value                       | Reference                    |
| Speed            | Very Fast                   | Slower                       |
| Size             | Small, fixed                | Large, dynamic               |
| Access Style     | LIFO                        | Random Access                |
| Memory Cleanup   | Auto (via call stack)       | Garbage Collected            |
| Examples         | number, string              | object, array, function      |

------------------------------------------------
✅ Summary:

- Stack → Simple, safe, fast  
- Heap → Powerful, flexible, shared  
- JavaScript handles both for you behind the scenes
*/

// visual diagram : 