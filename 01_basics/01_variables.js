console.log("Hello World"); // Shows "Hello World" in the console

/*
| Keyword | Meaning                                         |
|-------- |-------------------------------------------------|
| `let`   | A regular box you can change later              |
| `const` | A strong box — once filled, cannot be changed   |
| `var`   | Old method, not used much now                   |
*/




// ------------------------ *var* ------------------------ //
var fruit = "apple"; 
// You can place this basket anywhere in the room, and still access it — because `var` is function-scoped

var fruit = "banana"; 
// ✅ You can declare it again — and it will work!

/*
👉 These days, it's better to use `let` and `const`.
👉 Use `var` only when working with old JavaScript code.
*/

// 😲 What is the problem with var?
console.log(a); // undefined
var a = 5;
// No error — you'll see "undefined" because of **hoisting**
// With `let` or `const`, it would give an error — so they are safer



// ------------------------ *let* ------------------------ //
let fruit = "banana"; 
// The basket is only visible where you placed it — block scoped (`{}` area only)

let toy = "car";
toy = "train"; // ✅ Okay — can change value
// let toy = "plane"; // ❌ Error! Can't declare the same name again inside the same block



// ------------------------ *const* ------------------------ //
const gift = "robot"; 
// This box says: “Once I get a value, you can’t ever change it.”

// gift = "doll"; // ❌ Error! Can't change the value

// ✅ BUT — if the content is an object or array, you can change what's inside



/*
📚 Summary to remember:

| Keyword   | Type   | Scope          | Drawbacks              |
|---------- |--------|----------------|------------------------|
| `var`     | Old    | Function scope | Hoisting issues        |
| `let`     | New    | Block scope    | Safer                  |
| `const`   | New    | Block scope    | Value can't be changed |
*/



const product = {
  name: "Teddy Bear",
  price: 300,
  color: "Brown"
};

console.table(product); 
// ✅ Why use it? Shows data clearly, easy to debug, neat for developers

/* 
┌─────────┬──────────────┐
│ (key)   │   Values     │
├─────────┼──────────────┤
│ name    │ 'Teddy Bear' │
│ price   │     300      │
│ color   │   'Brown'    │
└─────────┴──────────────┘
*/

/* 🧠 Remember:
| Function          | What it does                                |
|------------------ |---------------------------------------------|
| `console.log()`   | Shows things normally                        |
| `console.table()` | Shows things in a nice table format          |
*/



let yourName; // undefined — the box is empty

/*
| Code                    | Meaning                                  |
|------------------------|------------------------------------------|
| `let yourName;`        | Creates an empty box called yourName     |
| `yourName = "Atanu";`  | Puts "Atanu" inside the box              |
| `console.log(yourName);` | Shows what’s inside the box            |
*/
