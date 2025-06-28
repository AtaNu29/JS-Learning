/* ----------------------------------------
   ✅ forEach with an array of strings
---------------------------------------- */

const coding = ["js", "ruby", "java", "python", "cpp"];

// ✅ Method 1 — Regular function
coding.forEach(function (val) {
    console.log(val);
});

/*
👦 EXPLANATION:
- We have a basket: ["js", "ruby", "java", "python", "cpp"]
- Robot picks out each item and prints:
    js
    ruby
    java
    python
    cpp
*/

// ✅ Method 2 — Arrow function
coding.forEach((item) => {
    console.log(item);
});

/*
👦 EXPLANATION:
- Same thing, but written shorter with arrow function.
- Prints each language name.
*/

// ✅ Method 3 — Separate function
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

/*
👦 EXPLANATION:
- We built a robot function called printMe.
- forEach gives each language to printMe.
- Prints all languages.
*/

// ✅ Method 4 — with index and array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

/*
👦 EXPLANATION:
- forEach can give:
    item → current thing
    index → where it is in the basket
    arr → the whole basket

So prints:
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
...
*/

/* ----------------------------------------
   ✅ forEach with array of objects
---------------------------------------- */

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});

/*
👦 EXPLANATION:
- myCoding is a basket of objects:
    { languageName: "javascript", languageFileName: "js" }
    { languageName: "java", languageFileName: "java" }
    ...

- Robot looks at each object.
- Prints the languageName:
    javascript
    java
    python
*/

/*
✅ Short Explanation
forEach → robot looks at each thing in the basket.

Works on:

arrays of words

arrays of objects

Can use:

normal function

arrow function

separate function name

Can see:

item → the value

index → position

arr → whole array
*/
