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
