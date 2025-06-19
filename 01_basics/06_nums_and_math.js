// ✅ JavaScript Number Basics and Methods

// ▶️ Number declaration
const num = 23;
console.log(typeof num); // "number" (primitive)

const objNum = new Number(23);
console.log(typeof objNum); // "object"

const num1 = 25;
const num2 = 3.14;
const num3 = -42;

// Note: Using Number() constructor is not recommended as it can lead to unexpected behavior.

console.log(num1, num2, num3);
// Output: 25 3.14 -42

// ▶️ typeof returns the data type
console.log(typeof num1); 
// Output: 'number'

// ▶️ Arithmetic operations
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % 4);    // Modulus (remainder)
console.log(num1 ** 2);   // Exponentiation (25^2)

// ▶️ Number methods

const x = 123.456;

// toFixed(): returns a string with fixed decimal points
console.log(x.toFixed(2)); 
// Output: '123.46'

// toString(): converts number to string
console.log(x.toString()); 
// Output: '123.456'

// toPrecision(): formats number with total digits
const number = 9.8765;

console.log(number.toPrecision(2)); // '9.9'
console.log(number.toPrecision(3)); // '9.88'
console.log(number.toPrecision(4)); // '9.877'
console.log(number.toPrecision(5)); // '9.8765'

// isNaN(): checks if value is Not a Number
console.log(isNaN("hello")); 
// Output: true

// Number(): converts strings to number
console.log(Number("45")); 
// Output: 45

// parseInt(): converts string to integer
console.log(parseInt("99.99")); 
// Output: 99

// parseFloat(): keeps decimal values
console.log(parseFloat("99.99")); 
// Output: 99.99

// +++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ▶️ Math object (built-in)

// ✅ JavaScript Math Methods with Explanation

console.log(Math.PI);
// ➤ Output: 3.141592653589793
// The value of π (pi), used in circles.

console.log(Math.round(4.6));
// ➤ Output: 5
// Rounds to the nearest whole number. 4.6 becomes 5, 4.4 becomes 4.

console.log(Math.floor(4.9));
// ➤ Output: 4
// Always rounds down to the nearest integer.

console.log(Math.ceil(4.1));
// ➤ Output: 5
// Always rounds up to the nearest integer.

console.log(Math.abs(-50));
// ➤ Output: 50
// Returns the absolute value (removes minus sign).

console.log(Math.sqrt(64));
// ➤ Output: 8
// Returns the square root of the number.

console.log(Math.pow(2, 3));
// ➤ Output: 8
// 2 raised to the power of 3 (2 * 2 * 2).

console.log(Math.max(3, 7, 2));
// ➤ Output: 7
// Returns the highest number among the given values.

console.log(Math.min(3, 7, 2));
// ➤ Output: 2
// Returns the lowest number among the given values.

// ▶️ Random number (between 0 and 1)
console.log(Math.random()); 
// Output: a random number like 0.3471...

// ▶️ Random number between 1 and 100
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// ▶️ Random number between 10 and 20

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 15, 18, 10, 20, 16

/*
💡 How it works:
Math.random() → generates a random decimal between 0 (inclusive) and 1 (exclusive).

(max - min + 1) → adjusts the range, here it becomes (20 - 10 + 1) = 11

Math.random() * 11 → gives a value from 0 to 10.999...

Math.floor(...) → rounds it down to nearest whole number (0 to 10)

+ min → shifts the range from (0–10) to (10–20)
*/

/*
| Method         | What It Does         | Example               |
| -------------- | -------------------- | --------------------- |
| `Math.PI`      | Gives the value of π | `3.14...`             |
| `Math.round()` | Nearest integer      | `Math.round(4.6) → 5` |
| `Math.floor()` | Rounds **down**      | `Math.floor(4.9) → 4` |
| `Math.ceil()`  | Rounds **up**        | `Math.ceil(4.1) → 5`  |
| `Math.abs()`   | Removes minus sign   | `Math.abs(-5) → 5`    |
| `Math.sqrt()`  | Square root          | `Math.sqrt(9) → 3`    |
| `Math.pow()`   | Exponent (power)     | `Math.pow(2, 4) → 16` |
| `Math.max()`   | Largest number       | `Math.max(1, 5, 3)`   |
| `Math.min()`   | Smallest number      | `Math.min(1, 5, 3)`   |

*/