// 🎒 Imagine your code is like a school:
// - The whole school = Global Scope
// - A classroom inside = Local Scope

// ------------------------------
// 🌍 GLOBAL SCOPE EXAMPLE
// ------------------------------
let toy = "teddy bear"; // This toy is available to everyone in the school

console.log("Global toy:", toy); // ✅ Output: teddy bear

// ------------------------------
// 🚪 LOCAL SCOPE EXAMPLE (inside a function)
// ------------------------------
function playRoom() {
    let toy = "car"; // This toy is only available inside the classroom (function)
    console.log("Local toy inside playRoom:", toy); // ✅ Output: car
}

playRoom();

// ------------------------------
// ❌ Trying to access local toy outside the room
// ------------------------------
// console.log(toy); 
// ⚠️ If you uncomment this line inside the function, it works
// ⚠️ But trying to access 'car' toy outside the function gives an error
// In our case, global "toy" is still "teddy bear"

// ------------------------------
// 🧠 PRO TIP: Same variable name in global and local
// ------------------------------
let fruit = "apple"; // Global fruit

function eat() {
    let fruit = "banana"; // Local fruit
    console.log("Local fruit inside eat:", fruit); // ✅ banana
}

eat();

console.log("Global fruit:", fruit); // ✅ apple

// ------------------------------
// 🛑 THE `var` PROBLEM
// ------------------------------

// 🚫 1. var ignores block (like if, for)
// ⚠️ var is FUNCTION scoped, NOT block scoped

if (true) {
    var snack = "chocolate"; // Declared with var inside a block
}

console.log("Snack with var outside if block:", snack); // 😱 Output: chocolate
// Even though 'snack' was declared inside the if block, it's available outside!

// ✅ let behaves correctly
if (true) {
    let juice = "mango"; // let is block scoped
    // console.log("Juice inside block:", juice); // ✅ Works here
}
// console.log("Juice outside block:", juice); // ❌ Error: juice is not defined

// 🚫 2. var can be redeclared (bad practice)
var pencil = "red";
var pencil = "blue"; // ✅ Allowed (but dangerous!)
console.log("Pencil color with var:", pencil); // Output: blue

// ✅ let/const prevent this
let pen = "black";
// let pen = "green"; // ❌ Error: Identifier 'pen' has already been declared

// ------------------------------
// 📝 SUMMARY
// ------------------------------
// ✅ Global Scope → Variable declared outside functions
// ✅ Local Scope  → Variable declared inside functions or blocks
// 🔄 If same name → JavaScript picks the closer one (local wins inside function)

// 🎓 Simple way to remember:
// - Global = Outside the classroom = everyone can use
// - Local  = Inside the classroom = only people in that room can use
// ❌ var is function scoped → leaks outside if/for blocks (bad!)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 🪄🪄🌟🪄🪄 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Think of "scope" like a room. Variables live inside rooms.
// Hoisting means: JS lifts some things to the top (like a balloon 🎈).

// ============================
// 🔶 GLOBAL SCOPE
let a = 300 // This 'a' is outside any room — it's global!

if (true) {
    // 🟡 BLOCK SCOPE (a small room)
    let a = 10 // New 'a' — only lives inside this block
    const b = 20 // Also block-scoped

    // console.log("INNER:", a); // Shows 10 — the 'a' inside the room
}

// console.log(a); // Shows 300 — the outside 'a'
// console.log(b); // ❌ ERROR — b only lives inside the block (room)
// console.log(c); // ❌ ERROR — c is commented out above

// ============================
// 🔷 FUNCTION SCOPE
function one(){
    const username = "atanu" // lives inside function 'one'

    function two(){
        const website = "github" // lives inside 'two'
        console.log(username); // ✅ can access username from parent
    }

    // console.log(website); // ❌ website only lives inside 'two'

    two()
}

// one(); // run the function

// ============================
// 🔶 NESTED BLOCK SCOPE
if (true) {
    const username = "atanu"
    if (username === "atanu") {
        const website = " github"
        // console.log(username + website); // ✅ both live in same or parent scope
    }

    // console.log(website); // ❌ website is inside inner if only
}

// console.log(username); // ❌ username is inside the outer if block only

// ============================
// 🌟 MINI HOISTING EXAMPLE

// ✅ This works because JS hoists function declarations
console.log(addone(5)) // Output: 6

function addone(num){
    return num + 1
}

// ❌ This gives ERROR: Cannot access 'addTwo' before initialization
addTwo(5) // ❌ ReferenceError

const addTwo = function(num){
    return num + 2
}
