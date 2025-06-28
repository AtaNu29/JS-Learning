const user = { 
    username: "atanu",
    price: 499,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to our platform`);
        console.log(this); // shows the whole user object
    }
}

user.welcomeMessage(); // Output: atanu , welcome to our platform
                // Output: { username: 'atanu', price: 499, welcomeMessage: [Function: welcomeMessage] }

user.username = "dev";
user.welcomeMessage(); // Output: dev , welcome to our platform
                // Output: { username: 'dev', price: 499, welcomeMessage: [Function: welcomeMessage] }

// Outside object — `this` doesn't work like that
function greet1(){
    let username = "arjun"
    console.log(this.username); // undefined
}
greet1();

// Function expression
const greet2 = function () {
    let username = "ria"
    console.log(this.username); // still undefined
}
greet2();

// Arrow function — does not have its own `this`
const greet3 = () => {
    let username = "lina"
    console.log(this); // refers to the outside/global object
}
greet3();

// Arrow function - different ways

// 1. With return
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}

// 2. Implicit return
const addTwo2 = (num1, num2) => num1 + num2;

// 3. Return object
const addTwo3 = (num1, num2) => ({ sum: num1 + num2 });

console.log(addTwo1(10, 20)); // 30
console.log(addTwo2(7, 8));  // 15
console.log(addTwo3(1, 2)); // { sum: 3 }

/*
| Context                      | Code Example                             | In Browser (window)           | In Node.js                    |
| ---------------------------- | ---------------------------------------- | ----------------------------- | ----------------------------- |
| Global `this`                | `console.log(this)`                      | `Window` object               | `{}` (empty object)           |
| Inside a regular function    | `function greet() { console.log(this) }` | `Window` (non-strict mode)    | `undefined` (strict mode)     |
| Inside an object method      | `obj.method()`                           | Refers to `obj`               | Refers to `obj`               |
| Arrow function inside object | `arrowFunc = () => console.log(this)`    | Takes `this` from outer scope | Takes `this` from outer scope |
| Inside class method          | `this.name` in a class method            | Refers to class instance      | Refers to class instance      |
*/

/*
| ❌ Myth                                                    | ✅ Truth                                                                               |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| "`this` always refers to the object it's in"              | ❌ Not in arrow functions. Arrow functions don't have their own `this`.                 |
| "`this` in global scope is the window"                    | ✅ Only in browsers. In Node.js, global `this` is an empty object `{}`.                 |
| "`this` works the same in arrow and normal functions"     | ❌ Arrow functions inherit `this` from where they're defined. Regular functions do not. |
| "`this.username` inside a function always gives username" | ❌ If `username` is a local variable, `this.username` will be undefined.                |
*/

// ***************************** Importent +++++++++++++++++++++++++++

/*
In an arrow function, this does not refer to any object on its own, because arrow functions do not have their own this.

Instead, arrow functions inherit this from their parent scope — the place where the arrow function was defined.

📌 For example:

In the browser, that parent is usually the window object.

In Node.js, it's usually an empty object {}.

So:

const myFunc = () => {
  console.log(this); // In browser: Window object | In Node.js: {}
}

In short: Arrow functions don’t create their own this. They borrow it from where they live. */