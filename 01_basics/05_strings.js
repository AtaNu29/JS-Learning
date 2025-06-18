"use strict";

// ✅ JavaScript String Examples and Explanation

// Primitive String
const myName = "Atanu";

// String Object using 'new String()'
const newName = new String("Sayan Hazra");

// Template Literal String
const newString = `Hello, World!`;

// ℹ️ Notes:
// newName is a String object (typeof newName = "object")
// myName is a primitive string (typeof myName = "string")

// ▶️ Output using template literals
console.log(`${myName} & ${newName}, ${newString}`);
// Output: Atanu & Sayan Hazra, Hello, World!

// ▶️ String Object
console.log(newName);
// Output: [String: 'Sayan Hazra']
// Note: This is not an array — it's a String object.

console.log(newName[0]);
// Output: S
// You can access characters like arrays (index starts at 0)

console.log(newName.length);
// Output: 11
// Total number of characters including space

console.log(newName.toUpperCase());
// Output: SAYAN HAZRA
// Converts all characters to uppercase

console.log(newName.charAt(4));
// Output: n
// Returns character at index 4

console.log(newName.indexOf("n"));
// Output: 4
// Returns the first index where "n" appears

console.log(newName.substring(0, 5));
// Output: Sayan
// Returns a substring from index 0 to 4 (5 is not included)

console.log(newName.slice(-8, 5));
// Output: an
// Returns characters from index 6 to 9 (10 is not included)

const spacedName = "         atanu             ";
console.log(spacedName);
// Output: "         atanu             "
// Lots of spaces at the start and end
console.log(spacedName.trim());
// Output: "atanu"
// Removes spaces from both start and end

console.log(spacedName.trimStart());
// Output: "atanu             "
// Removes spaces only from the beginning (start/left)

console.log(spacedName.trimEnd());
// Output: "         atanu"
// Removes spaces only from the end (right)

// ▶️ Using .replace()

const sentence = "JavaScript is awesome! JavaScript is fun!";

// Replace first occurrence of "JavaScript" with "JS"
const replacedOnce = sentence.replace("JavaScript", "JS");
console.log(replacedOnce);
// Output: "JS is awesome! JavaScript is fun!"

// Replace all occurrences using RegEx with /g flag
const replacedAll = sentence.replace(/JavaScript/g, "JS");
console.log(replacedAll);
// Output: "JS is awesome! JS is fun!"

// Replace word in a name
const userName = "Atanu Mondal";
const newUserName = userName.replace("Mondal", "Hazra");
console.log(newUserName);
// Output: "Atanu Hazra"

// ℹ️ Notes:
// - .replace() replaces only the **first match** by default.
// - Use Regular Expressions with the **g** flag (`/pattern/g`) to replace all.
// - The original string remains unchanged. A new string is returned.

const phrase = "Learning JavaScript is fun!";

console.log(phrase.includes("JavaScript"));
// Output: true
// "JavaScript" is present in the string

console.log(phrase.includes("Python"));
// Output: false
// "Python" is not present

// ▶️ Using .split()

const sentenceOne = "HTML, CSS, JavaScript, React";

// ✅ Split by comma and space
const techArray = sentenceOne.split(", ");
console.log(techArray);
// Output: ['HTML', 'CSS', 'JavaScript', 'React']
// Converts the string into an array based on the separator ", "

// ✅ Split by space
const words = "I love coding".split(" ");
console.log(words);
// Output: ['I', 'love', 'coding']

// ✅ Split by character (empty string)
const nameOne = "Atanu-mondal";
console.log(nameOne.split(""));
// Output: ['A', 't', 'a', 'n', 'u', '-', 'm', 'o', 'n', 'd', 'a', 'l']
// Splits every character including symbols

// ✅ Split by dash "-"
console.log(nameOne.split("-"));
// Output: ['Atanu', 'mondal']
// Dash is found, so it splits into two parts

// ✅ Split by something not in the string
console.log(nameOne.split("#"));
// Output: ['Atanu-mondal']
// Since "#" is not found, returns the original string inside an array

// ℹ️ Notes:
// - .split(separator) splits a string wherever the separator is found
// - Returns a new **Array**
// - Very useful for processing sentences, CSV, or formatting data

// 💡 JavaScript automatically converts primitive strings to String objects 
// when needed, so string methods like .toUpperCase(), .charAt(), .indexOf() 
// work on both types.

// ✅ Final Tip:
// Methods like toUpperCase() need () because they are functions inside objects (called "methods").
