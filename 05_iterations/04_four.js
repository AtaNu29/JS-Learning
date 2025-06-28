/* -----------------------------------------
   ✅ for...in with OBJECT
----------------------------------------- */

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

/*
👦 EXPLANATION:
- The robot looks at all the “keys” in the object:
    js
    cpp
    rb
    swift
- It prints:
    js shortcut is for javascript
    cpp shortcut is for C++
    ...
*/

/* -----------------------------------------
   ✅ for...in with ARRAY
----------------------------------------- */

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}

/*
👦 EXPLANATION:
- With arrays, for...in loops over the **indexes**:
    0, 1, 2, 3, 4
- programming[key] gives the value:
    js
    rb
    py
    java
    cpp
- Prints all languages
*/

/* -----------------------------------------
   ❌ for...in with Map (NOT WORKING)
----------------------------------------- */

/*
| Used On    | Works With                | Example                        |
| ---------- | ------------------------- | ------------------------------ |
| **for…in** | Objects, arrays (indexes) | loops over **keys or indexes** |
| **for…of** | Arrays, strings, Maps     | loops over **values**          |
| **Map**    | Needs for…of              | loop with `[key, value]`       |
*/