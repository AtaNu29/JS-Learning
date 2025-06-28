/* -----------------------------------------
   ✅ FOR...OF LOOP WITH ARRAY
----------------------------------------- */

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

/*
👦 EXPLANATION:
- We have a basket of numbers: [1, 2, 3, 4, 5]
- The robot (for...of loop) picks out each number one by one.
- Prints:
    1
    2
    3
    4
    5
*/

/* -----------------------------------------
   ✅ FOR...OF LOOP WITH STRING
----------------------------------------- */

const greetings = "Hello world!";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

/*
👦 EXPLANATION:
- Our robot has the word "Hello world!"
- It picks each letter, one by one.
- Prints:
    Each char is H
    Each char is e
    Each char is l
    ...
*/

/* -----------------------------------------
   ✅ MAP EXAMPLE
----------------------------------------- */

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Duplicate key, keeps only one

console.log(map);

/*
👦 EXPLANATION:
- Map is like a magical box of pairs:
    IN → India
    USA → United States of America
    Fr → France
- Adding 'IN' twice doesn’t make two entries!
*/

/* ✅ Looping through Map with for...of */

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

/*
👦 EXPLANATION:
- Robot goes through the map one pair at a time.
- Prints:
    IN :- India
    USA :- United States of America
    Fr :- France
*/

/* -----------------------------------------
   ✅ OBJECT EXAMPLE
----------------------------------------- */

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

/*
⚠️ This part below does NOT work:
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
   
👦 EXPLANATION:
- for...of only works on things like arrays, strings, maps.
- Objects are NOT directly iterable like that.
*/