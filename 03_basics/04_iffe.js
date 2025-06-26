// ✅ Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // Arrow function IIFE with argument
    console.log(`DB CONNECTED TWO ${name}`);
})('Atanu');

/*
🧠 What is IIFE?
IIFE stands for:

Immediately Invoked Function Expression

That means:
A function that runs immediately after it’s written — like saying "do it now!"

We wrap it in () to turn it into an expression, and then call it right away using () again.

🤖 Why use IIFE?
To avoid polluting the global scope.

To create a private block of code that runs once. */

/*
🧠 Why is ; important before an IIFE?
Because in JavaScript, IIFE starts with (, which makes it look like it's continuing from the previous line.

If the line before your IIFE doesn’t end properly (like with a semicolon ;), JavaScript might get confused and throw an error.

🔑 Rule of Thumb:
Always start an IIFE with ; if it comes right after another statement. It keeps your code safe and bug-free.
*/