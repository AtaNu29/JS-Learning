// This is a function that says each letter of your name "ATANU"
function sayMyName(){
    console.log("A"); // It prints A
    console.log("T"); // It prints T
    console.log("A"); // It prints A
    console.log("N"); // It prints N
    console.log("U"); // It prints U
}

// sayMyName() // This will print A T A N U one by one

// This function adds two numbers
function addTwoNumbers(number1, number2){
    return number1 + number2 // Adds number1 and number2 and gives the result back
}

const result = addTwoNumbers(10, 20) // You can change these numbers
// console.log("Result: ", result); // This will show: Result: 30

// ✅ This version uses a default username if nothing is given
function loginUserMessageWithDefault(username = "Atanu") {
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// 🧪 Examples:
console.log(loginUserMessageWithDefault("Hitesh")); // Output: Hitesh just logged in
console.log(loginUserMessageWithDefault());         // Output: Atanu just logged in (default)
console.log(loginUserMessageWithDefault(""));       // Output: Please enter a username

// ❌ No default username — user must give one
function loginUserMessageNoDefault(username) {
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// 🧪 Examples:
console.log(loginUserMessageNoDefault("Atanu")); // Output: Atanu just logged in
console.log(loginUserMessageNoDefault());        // Output: Please enter a username
console.log(loginUserMessageNoDefault(""));      // Output: Please enter a username
/*
| Function Name                 | Default Username | Behavior if no input |
| ----------------------------- | ---------------- | -------------------- |
| `loginUserMessageWithDefault` | `"Atanu"`        | Uses `"Atanu"`       |
| `loginUserMessageNoDefault`   | ❌ None           | Shows warning        |
*/

// This function gives the rest of the cart items except the first two
function calculateCartPrice(val1, val2, ...num1){
    return num1 // Returns an array of remaining items
}

console.log(calculateCartPrice(150, 250, 100, 500)) // val1 = 150, val2 = 250, num1 = [100, 500]
// Output: [100, 500]

// An object with username and price
const user = {
    username: "Atanu",
    price: 299
}

// Function that prints details from an object
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user) // Output: Username is Atanu and price is undefined (typo: prices ≠ price)

handleObject({
    username: "Atanu",
    price: 499
}) 
// Output: Username is Atanu and price is 499

// An array with numbers
const myNewArray = [100, 200, 300, 400]

// This function gives the second item from the array
function returnSecondValue(getArray){
    return getArray[1] // 1 is second item (0-based index)
}

// console.log(returnSecondValue(myNewArray)); // Output: 200
console.log(returnSecondValue([700, 800, 900])); 
// Output: 800 (second value)
