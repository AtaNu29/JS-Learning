// ✅ 1. Object Declaration – Two Ways

// Method 1: Object literal
let person = {
  name: "Riya",
  age: 18
};

// Method 2: Using new Object()
let student = new Object();
student.name = "Rahul";
student.age = 20;

// Method 3: Singleton Object – will learn in the next class 😊

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
- obj[sym] = value

🔷 Object.freeze(obj):
- Prevents all changes (no add/update/delete allowed)

🔷 delete obj.key:
- Deletes a property (only works if not frozen)
*/
