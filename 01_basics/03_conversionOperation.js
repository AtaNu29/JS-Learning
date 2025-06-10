// 🧃 What is Data Type Conversion?
// It's like changing an apple 🍎 into a banana 🍌.
// In JavaScript, one type of data (like a number) can be changed into another (like text).

// 1️⃣ Number → String
let number = 123;
let text = String(number);
console.log(text); // "123"
// We told JavaScript: "Make this number look like text!"

// 2️⃣ String → Number
let str = "456";
let num = Number(str);
console.log(num); // 456
// We told JavaScript: "This is actually a number, treat it like one!"

// 3️⃣ Automatic Type Conversion
let result = "5" + 3;
console.log(result); // "53"
// JavaScript saw a string and a number, so it turned the number into a string and joined them.

// 4️⃣ Manual Type Conversion
let result2 = Number("5") + 3;
console.log(result2); // 8
// We forced it: "Turn this string into a number before adding!"

// ✅ Useful Conversion Functions:
/*
| Purpose              | JavaScript Function | Description                        |
|----------------------|---------------------|------------------------------------|
| Convert to String    | String()            | Turns anything into text           |
| Convert to Number    | Number()            | Turns anything into a number       |
| Convert to Boolean   | Boolean()           | Turns into true/false              |
*/

// 🎨 Fun Examples:
console.log(Number("abc"));     // NaN → Not a Number
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true

// 🔚 Summary:
/*
👉 String()  → Converts anything to string
👉 Number()  → Converts anything to number
👉 Boolean() → Converts anything to true or false
*/

// 🧠 Easy to Remember: You're the boss! You decide how to convert.

// *********************************************************** some task ********************************************************************
// 👉 "Unary" comes from "one".
// 👉 It means it works on only one value.

// 🔹 Unary Minus Operator in JavaScript

// It changes the sign of a number.
// If the number is positive, it becomes negative.
// If the number is negative, it becomes positive.

let a = 5;
let b = -a;
console.log(b); // -5

let x = -10;
let y = -x;
console.log(y); // 10

// 🧠 Tip: It's called "unary" because it works on only one value.
// -------------------------------------------------------------------------- //
// 🔹 Unary Plus Operator in JavaScript

// It tries to convert a value to a number.
// If the value is already a number, it stays the same.

let c = "5";
let d = +c;
console.log(d); // 5 (as number, not string)

let e = true;
let f = +e;
console.log(f); // 1

let z = false;
console.log(+z); // 0

let notNumber = "abc";
console.log(+notNumber); // NaN

// 🧠 Tip: Use Unary Plus to convert strings or booleans to numbers.
// 🧠 Tip: Use Unary Minus Operator It changes the sign of a number / positive, it becomes negative / negative, it becomes positive.

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/4);
console.log(2%3);

// Why string to number conversion is confusing ?
let myFirstName = "Atanu";
let myLastName = "Mandal";
let fullName = myFirstName + " " + myLastName;
console.log(fullName);


console.log("1" + 2) // 12
console.log("1" + 2 + 2); // 122 because "1" + 2 = "12", "12" + 2 = "122".
console.log(1 + 2 + "2"); // 32 because 1 + 2 = 3, 3 + "2" = "32". cause JS works left to right
console.log( (2 + 3) * 2 / 5 ); //✅ () is used to do that part first.
/*(2 + 3) → 5
  5 * 2 → 10
  10 / 5 → 2*/



// ⚡ Final Thought:🧠 So yes, JavaScript evaluates left to right, but how the values behave depends on their types (number or string).

// NOT recommend

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // num1 = 4; num2 = 4; num3 = 4;

let gameCounter = 100;
gameCounter++; // ++gameCounter;

console.log(gameCounter); // 101

let secondGameCounter = 100;
secondGameCounter--;
console.log(secondGameCounter); // 99

//link to study x++(Postfix increment) / ++x(Prefix increment) :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment.