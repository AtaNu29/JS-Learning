// While loop counting from 3 to 15, jumping by 3
let index = 3;
while (index <= 15) {
    console.log(`Value of index is ${index}`);
    index = index + 3;
}

/*
👦 EXPLANATION:
- Our robot starts counting from 3.
- It goes up by 3 each time (so next is 6, then 9…).
- It keeps counting as long as the number is not bigger than 15.

So the robot prints:
Value of index is 3
Value of index is 6
Value of index is 9
Value of index is 12
Value of index is 15
*/

// While loop going through a toy box (array) of heroes
let myArray = ['ironman', "thor", "spiderman", "hulk"];

let arr = 0;
while (arr < myArray.length) {
    console.log(`Hero is ${myArray[arr]}`);
    arr = arr + 1;
}

/*
👦 EXPLANATION:
- We have a toy box (array) with:
    "ironman"
    "thor"
    "spiderman"
    "hulk"

- The robot looks inside and picks out each hero one by one!

So it prints:
Hero is ironman
Hero is thor
Hero is spiderman
Hero is hulk
*/

// Do-while loop starting from 11
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

/*
👦 EXPLANATION:
- The robot starts with score = 11.
- It prints:
    Score is 11

- Then it checks:
    Is score still less than or equal to 10?

- NOPE! Because 11 is already bigger than 10.
- So the robot stops and doesn’t run again.

That’s why this loop prints only once:
Score is 11

✅ In Short:

do…while always runs the first time, no matter what.
Even if the condition is false, the robot says something once before stopping.
*/