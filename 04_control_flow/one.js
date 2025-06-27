/*
✅ What is "if"?
Imagine your robot friend:
- If it's raining → robot takes umbrella.
- Else → robot goes to play.

✅ Operators Table:
| Symbol | Meaning                  |
|--------|--------------------------|
| <      | less than                |
| >      | greater than             |
| <=     | less than or equal to    |
| >=     | greater than or equal to |
| ==     | equal (loose)            |
| ===    | equal (strict)           |
| !=     | not equal (loose)        |
| !==    | not equal (strict)       |
| &&     | AND both true            |
| ||     | OR any one true          |

✅ Something extra:
Remember: variables made with **let** inside blocks cannot be used outside the block.

*/

// Check if user is logged in
const isUserloggedIn = true; // true
const temperature = 41;

// Example: if...else
if (temperature > 50) {
  console.log("temperature is greater than 50"); // won't run because 41 is not greater than 50
} else {
  console.log("temperature is 50 or less"); // temperature is 50 or less
}

console.log("Execute"); // Execute

// Example: scope of let variable
const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`); // User power: fly
}

// console.log(`User power: ${power}`); // This line would cause an error because power is not accessible outside the block

const balance = 1000;

// Example of if...else if...else
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200"); // less than 1200
}

// Logical operators: AND (&&), OR (||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course"); // won't run,
  //  But 2 == 3 is false, so the whole condition is false, and this console.log does NOT run because && operator needs all parts true
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in"); // User logged in because in OR (||), one true is enough
}
