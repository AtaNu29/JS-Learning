// ✅ Creating a Singleton Object (only one instance)
let tinderUser = {}; // or let tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Atanu Mondal";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
// ➜ { id: '123abc', name: 'Atanu Mondal', isLoggedIn: false }

// ✅ Nested Object Example
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Atanu",
            lastname: "Mondal"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname); 
// ➜ Atanu

// ✅ Object.assign() in JavaScript
// Used to copy or merge objects

// 🔹 Example 1: Copy one object into another
let target = { a: 1 };
let source = { b: 2 };

Object.assign(target, source);
console.log(target); // ➜ { a: 1, b: 2 }

// 🔹 Example 2: Merge multiple objects
let obj1 = { name: "Atanu" };
let obj2 = { age: 22 };
let obj3 = { city: "Kolkata" };

let merged = Object.assign({}, obj1, obj2, obj3); // Using Object.assign
let merged2 = { ...obj1, ...obj2, ...obj3 };      // Using Spread Operator

console.log(merged);  // ➜ { name: "Atanu", age: 22, city: "Kolkata" }
console.log(merged2); // ➜ { name: "Atanu", age: 22, city: "Kolkata" }

// 🔹 Example 3: Overwriting values
let original = { name: "Riya" };
let updated = { name: "Rahul" };

let result = Object.assign({}, original, updated);
console.log(result); // ➜ { name: "Rahul" }

// 🔹 Example 4: Cloning an object (shallow copy)
let person = { hobby: "Drawing", country: "India" };
let clone = Object.assign({}, person);

console.log(clone); // ➜ { hobby: "Drawing", country: "India" }

// ⚠️ Example 5: Shallow copy warning
let user = {
  name: "Tom",
  address: {
    city: "Delhi"
  }
};

let shallowCopy = Object.assign({}, user);
shallowCopy.address.city = "Mumbai";

console.log(user.address.city); // ➜ "Mumbai" ❗️(original also changed)

// 📘 Summary:
/*
✅ Object.assign(target, source):
- Copies properties from source to target
- If same keys exist, later values overwrite earlier
- Only copies outer (shallow) layer

❌ Not used for deep cloning (nested objects stay linked)
*/

/* ******************************************** 
🔁 Reminder:
- Array + Array → concat() or [...array]
- Object + Object → Object.assign() or { ...spread }

********************************************** */

// ✅ List of Users (like friends in a phonebook)
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "a@gmail.com" },
    { id: 3, email: "x@gmail.com" }
];

console.log(users[1].email); // ➜ a@gmail.com

// ✅ Check object properties
const userProfile = {
    id: "abc123",
    name: "Atanu",
    isLoggedIn: true
};

// 🧩 Object.keys() → gives you the names of the keys
console.log(Object.keys(userProfile)); 
// ➜ ["id", "name", "isLoggedIn"]

// 🧩 Object.values() → gives you the values
console.log(Object.values(userProfile)); 
// ➜ ["abc123", "Atanu", true]

// 🧩 Object.entries() → gives you key-value pairs
console.log(Object.entries(userProfile)); 
// ➜ [["id", "abc123"], ["name", "Atanu"], ["isLoggedIn", true]]

// 🧐 hasOwnProperty() → checks if the key exists
console.log(userProfile.hasOwnProperty('isLoggedIn')); 
// ➜ true

console.log(userProfile.hasOwnProperty('email')); 
// ➜ false

// ✅ Object.seal()
// You can change values but can't add or delete keys
const profile = { username: "hero", level: 5 };
Object.seal(profile);

profile.level = 10;        // ✅ allowed
profile.rank = "pro";      // ❌ not added
delete profile.username;   // ❌ won't be deleted

console.log(profile); 
// ➜ { username: "hero", level: 10 }

// ✅ Object.hasOwn()
// Newer way (ES2022+) to check if a key exists
console.log(Object.hasOwn(userProfile, 'name')); // ➜ true
console.log(Object.hasOwn(userProfile, 'email')); // ➜ false
