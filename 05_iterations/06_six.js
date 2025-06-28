/* -----------------------------------------
   ✅ forEach vs filter
----------------------------------------- */

// Example array
const coding = ["js", "ruby", "java", "python", "cpp"];

// Trying to use forEach to return values
const values = coding.forEach((item) => {
    console.log(item, "=> answer is", item);
    return item; 
});

console.log("Values from forEach:", values, "=> answer is undefined");

/*
👦 EXPLANATION:
- forEach just loops through the array and DOES NOT return a new array.
- So values is always undefined.
*/

/* ✅ The correct way to create a new filtered array is with filter */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter directly:
const newNums1 = myNums.filter((num) => {
    return num > 4;
});

console.log("newNums1:", newNums1, "=> answer is", newNums1);

/*
👦 EXPLANATION:
- filter checks each number.
- Keeps only numbers bigger than 4.
- So we get [5,6,7,8,9,10]
*/

// ✅ Doing the same thing with forEach instead of filter:

const newNums2 = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num);
    }
});

console.log("newNums2:", newNums2, "=> answer is", newNums2);

/*
👦 EXPLANATION:
- We built our own robot to check:
   “Is number bigger than 4?”
- If yes, push it into the new basket.
- Result is same: [5,6,7,8,9,10]
*/

/* -----------------------------------------
   ✅ Filtering books
----------------------------------------- */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// ✅ Filtering all History books
let userBooks = books.filter((bk) => bk.genre === 'History');

console.log("All History books:", userBooks, "=> answer is", userBooks);

/*
👦 EXPLANATION:
- Robot checks:
   “Is book genre History?”
- Keeps those books only.
*/

// ✅ Filtering History books published after 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});

console.log("History books published after 1995:", userBooks, "=> answer is", userBooks);

/*
👦 EXPLANATION:
- Robot checks two things:
   - Is the genre History?
   - Was it published in 1995 or later?
- Only keeps those books.
- Result:
  [
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
  ]
*/

// ✅ Filtering multiple things
let bookPublish = books.filter((item) => {
    return item.edition <= 2010 && item.publish >= 1980 && item.genre === 'Fiction';
});

console.log(bookPublish, "=> answer is", bookPublish);

/*
👦 Imagine you have a big basket of books.

The robot goes through each book and asks:

Is the edition year ≤ 2010?

Was it published in or after 1980?

Is the genre “Fiction”?

✅ If all the answers are yes, the robot keeps that book.
*/

/*
| **Syntax**                          | **Curly Braces `{}` Used?**  | **Need `return`?**    | **Example**                           |
| ----------------------------------- | ---------------------------- |--------------------- | ------------------------------------- |
| `() => expression`                  | ❌ No                        | ❌ No return needed  | `() => 5 + 10`                        |
| `() => { return expression }`       | ✅ Yes                       | ✅ Must write return | `() => { return 5 + 10; }`            |
| `() => { statement1; statement2; }` | ✅ Yes                       | ✅ Must write return | `() => { let x = 5; return x + 10; }` |
*/