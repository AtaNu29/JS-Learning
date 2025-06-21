// ✅ JavaScript Arrays: A Complete Beginner Guide :  

// 1. Declaring Arrays
const numbers = [1, 2, 3, 4, 5]; // Example: A list of numbers like counting 1 to 5

const fruits = ["apple", "banana", "mango"];// Example: A fruit basket with 3 fruits

const mixed = ["car", 10, true]; // Example: A mixed list: a word, a number, and a yes/no value

const usingConstructor = new Array(5, 10, 15); // Example: Another way to create an array using 'new Array'
// Note: This is not recommended as it can lead to unexpected behavior

// 2. Array Indexing (starts from 0)
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"

// 3. Array Methods:

// 🔹 push() - Add item at the end
fruits.push("grape"); 
// ["apple", "banana", "mango", "grape"]

// 🔹 pop() - Remove item from the end
fruits.pop(); 
// ["apple", "banana", "mango"]

// 🔹 unshift() - Add item at the start
fruits.unshift("orange"); 
// ["orange", "apple", "banana", "mango"]

// 🔹 shift() - Remove item from the start
fruits.shift(); 
// ["apple", "banana", "mango"]

// 🔹 length - Get number of items
console.log(fruits.length); // 3

// 🔹 includes() - Check if item exists
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("kiwi"));   // false

// 🔹 slice(start, end) - Copy part of array (non-destructive)
let sliced = fruits.slice(0, 2);
console.log(sliced); // ["apple", "banana"]
console.log(fruits); // Original remains

// 🔹 splice(start, deleteCount, ...items) - Remove or insert (destructive)
let food = ["rice", "dal", "fish", "sweets"];
let restFood = food.splice(1, 2); // Remove 2 items from index 1
console.log(food);     // ["rice", "sweets"]
console.log(restFood); // ["dal", "fish"]

food.splice(1, 0, "egg", "salad");
// ["rice", "egg", "salad", "sweets"]

// 🔹 join(separator) - Join array into a string
let letters = ["a", "b", "c"];
let word = letters.join("");    // "abc"
let spaced = letters.join("-"); // "a-b-c"

// 🔹 typeof and Array check
console.log(typeof fruits);          // "object"
console.log(Array.isArray(fruits));  // true

// 🔹 Full Example:
let basket = ["toy", "ball"];
basket.unshift("bat");              // ["bat", "toy", "ball"]
basket.push("car");                 // ["bat", "toy", "ball", "car"]
basket.shift();                     // ["toy", "ball", "car"]
let part = basket.slice(1, 3);      // ["ball", "car"]
basket.splice(1, 1, "lego");        // ["toy", "lego", "car"]
let result = basket.join(" + ");    // "toy + lego + car"

console.log("Main Basket:", basket);
console.log("Sliced Part:", part);
console.log("Joined Result:", result);

// Summary Table (in comment):
/*
| Method       | Use                                  |
|--------------|---------------------------------------|
| push()       | Add to end                            |
| pop()        | Remove from end                       |
| unshift()    | Add to start                          |
| shift()      | Remove from start                     |
| length       | Count items                           |
| includes()   | Check if item exists                  |
| slice()      | Copy part of array (non-destructive)  |
| splice()     | Change array (remove/insert items)    |
| join()       | Join array into a string              |
| isArray()    | Check if variable is an array         |
*/
