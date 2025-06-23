// ✅ 1. Object Declaration – Two Ways

// Method 3: Singleton Object – will learn in the next class 😊

// Method 2: Using new Object()
let student = new Object();
student.name = "Rahul";
student.age = 20;

// Method 1: Object literal
let person = {
  name: "Riya",
  age: 18
};

// ✅ 2. Accessing Properties

// Dot notation
console.log(person.name);        // "Riya"

// Bracket notation
console.log(person["age"]);      // 18

// ✅ 3. Key with space or special characters

let book = {
  "book name": "JS for Kids",
  "author-name": "John"
};

console.log(book["book name"]);     // "JS for Kids"
console.log(book["author-name"]);   // "John"

// ❌ Dot notation won't work: book.book name (invalid)

// ✅ 4. Access using variable as key

let keyName = "name";
console.log(person[keyName]);    // "Riya"

// ❌ person.keyName → wrong (won’t work)

// ✅ 5. Symbol as key

let id = Symbol("userId");

let user = {
  name: "Atanu",
  [id]: 101
};

console.log(user[id]);           // 101

// ✅ 6. Creating Object using Object.create()

let basePerson = {
  greet: function () {
    console.log("Hello!");
  }
};

let newPerson = Object.create(basePerson);
newPerson.name = "Riya";

console.log(newPerson.name);     // "Riya"
newPerson.greet();               // "Hello!" (inherited from basePerson)

// ✅ 7. Object.freeze() – Lock the object

Object.freeze(person);

person.age = 25;            // ❌ won't change
person.city = "Kolkata";    // ❌ won't add
delete person.name;         // ❌ won't delete

console.log(person);        // { name: "Riya", age: 18 }

// ✅ 8. Deleting property (if object is not frozen)

let animal = {
  type: "Cat",
  color: "White"
};

delete animal.color;
console.log(animal);        // { type: "Cat" }

// ✅ What is 'this' in an object?

// 'this' refers to the current object calling the method.
// It helps access the object's own properties inside a function.

let person = {
  name: "Riya",
  age: 18,
  greet: function () {
    console.log("Hi, my name is " + this.name);
  }
};

person.greet(); // Output: Hi, my name is Riya

// ❌ If we don’t use 'this', it won't know where 'name' is

let wrongPerson = {
  name: "Rahul",
  greet: function () {
    console.log("Hi, my name is name"); // Invalid, will print as-is
  }
};

wrongPerson.greet(); // Output: Hi, my name is name

// ✅ Another Example

let dog = {
  name: "Tommy",
  speak: function () {
    console.log(this.name + " says Woof!");
  }
};

dog.speak(); // Output: Tommy says Woof!

// 📘 Summary (For Easy Recall): 

/*
🔷 Ways to Create Objects:
- let obj = { key: value }
- let obj = new Object()
- let obj = Object.create(baseObject)

🔷 Property Access:
- obj.key
- obj["key"]
- obj[variable]

🔷 If key contains space or special characters → use bracket notation ["like this"]

🔷 Using Symbol as a key:
- let sym = Symbol("desc")
- [sym] = value

🔷 Object.freeze(obj):
- Prevents all changes (no add/update/delete allowed)

🔷 delete obj.key:
- Deletes a property (only works if not frozen)

// 📌 Summary:

- 'this' means: "the object itself"
- Used inside object methods
- Helps access the object's own data (like name, age, etc.)
- Think of 'this' as saying: "I am this object"
*/
