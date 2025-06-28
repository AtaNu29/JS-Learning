/* -----------------------------------------------
   ✅ Example Map
------------------------------------------------ */

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* -----------------------------------------------
   ✅ Using forEach to add 10
------------------------------------------------ */

// We want to add 10 to each number and store the result.

let additionValue = [];

let addition = myNumers.forEach((num) => {
    // add 10 and push into additionValue array
    additionValue.push(num + 10);
});

console.log("forEach result:", additionValue);
// ✅ Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

/*
👦 EXPLANATION:
- forEach goes through each number.
- Adds 10.
- Pushes it into additionValue array.
- forEach DOES NOT return a new array automatically.
- That's why we have to manually push values.
- The variable 'addition' is always undefined because forEach returns nothing.
*/

/* -----------------------------------------------
   ✅ Using map and filter with chaining
------------------------------------------------ */

// We want to:
    // 1. Multiply each number by 10
    // 2. Add 1 to each number
    // 3. Keep only numbers >= 40

const newNums2 = myNumers
    .map((num) => num * 10)   // Multiply by 10
    .map((num) => num + 1)    // Add 1
    .filter((num) => num >= 40); // Keep numbers >= 40

console.log("Chained map/filter result:", newNums2);
// ✅ Output: [ 41, 51, 61, 71, 81, 91, 101 ]

/*
👦 EXPLANATION:
- Step 1 → multiply each number by 10
    [1,2,3,...] → [10,20,30,...]
- Step 2 → add 1
    [10,20,30,...] → [11,21,31,...]
- Step 3 → keep only numbers >= 40
    → [41, 51, 61, 71, 81, 91, 101]
- map automatically returns a new array each time.
- filter creates a new array of matching items.
*/

/* -----------------------------------------------
   ✅ Short summary
------------------------------------------------

forEach → loops, but returns nothing
map → loops and returns a new array
filter → loops and keeps matching items

✅ forEach example:
[1,2,3,...] → push each value +10 into another array

✅ map/filter chaining:
[1,2,3,...] → *10 → +1 → keep >= 40

*/
/*
| **Feature**         | **map()**                                                           | **filter()**                                                             |
| ------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Purpose**         | Transforms every element in the array.                              | Selects only elements that pass a test.                                  |
| **Return value**    | Always returns a new array of **same length** as the original.      | Returns a new array, usually **smaller or equal in length.**             |
| **Callback result** | The return value of the callback **becomes the new array element.** | The callback must return true/false; only true values stay in the array. |
| **Original array**  | Not changed.                                                        | Not changed.                                                             |
| **Common use**      | - Change numbers <br> - Format strings <br> - Build new objects     | - Remove unwanted items <br> - Find matches                              |

*/

/*
✅ Short Summary:

| **map()**          | **filter()**           |
| ------------------ | ---------------------- |
| Changes each item  | Keeps or removes items |
| Always same length | Can be shorter         |
| Returns new array  | Returns new array      |
*/

/*

***✅ map() → changes values.
Takes each item and transforms it into a new value.
Always returns a new array with same number of items.***

----------------------------------------------------------

*** .filter() is not for changing values.
.filter() is for keeping or removing items.***

*/