/**
 * ------------------------------------------------
 * How to Create and Use Promises in JavaScript
 * ------------------------------------------------
 */

/**
 * Example #1:
 * Creating a Promise using the constructor syntax
 */
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 1 is complete');
        resolve();
    }, 1000);
});

// Consuming promiseOne
promiseOne.then(function () {
    console.log('promiseOne consumed');
});

/**
 * Example #2:
 * Another way — directly creating and consuming the promise
 */
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 is complete');
        resolve();
    }, 1000);
}).then(() => {
    console.log('promiseTwo consumed');
});

/**
 * Example #3:
 * Resolving a promise with data (an object)
 */
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: 'Atanu Mondal',
            email: 'atanu@example.com'
        });
    }, 1000);
});

// Consuming promiseThree
promiseThree.then(function (user) {
    console.log(user); // logs the object
});

/**
 * Example #4:
 * Rejecting a promise, and chaining .then, .catch, .finally
 */
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({
                username: 'Sayan Hazra',
                email: 'sayan@example.com'
            });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

// Consuming promiseFour
promiseFour
    .then(function (user) {
        console.log(user);
        return user.username;
    })
    .then(function (username) {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });

/**
 * Example #5:
 * Using async/await syntax with try-catch for error handling
 */
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({
                username: 'Pinaki',
                email: 'pinaki@example.com'
            });
        } else {
            reject('ERROR: Login Unsuccessful');
        }
    }, 1000);
});

// Consuming promiseFive with async/await
async function consumePromiseFive() {
    try {
        // Do NOT write promiseFive() because promise is an object,
        // not a function. Simply await it directly:
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// For Next Class 
// Class Link [https://youtu.be/Rive84an6Lc?si=43Cgmv3_J8wL3Qho]

/**
 * Example 1:
 * Using async/await syntax to fetch followers
 */
async function getFollowersCount() {
    try {
        // Fetching user data from GitHub API
        const responseUrl = await fetch('https://api.github.com/users/hiteshchoudhary');

        // Parsing JSON response to a JavaScript object
        const data = await responseUrl.json(); // this converts the response body (JSON string) into an object

        // Accessing the followers count
        console.log('Followers with async/await: ', data.followers);
    } catch (error) {
        // Handling any errors (like network failure)
        console.log('ERROR: ', error);
    }
}

getFollowersCount(); // Call the async function

/**
 * Example 2:
 * Doing the same task using .then() and .catch() chaining
 */
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        // Convert the raw response to JSON (returns a promise)
        return response.json();
    })
    .then((info) => {
        // Access followers from the parsed object
        console.log('Followers with .then(): ', info.followers);
    })
    .catch((error) => {
        // Catch and log any errors that occurred in the fetch or parsing
        console.log('ERROR: ', error);
    });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/**
 * --------------------------------------------------
 * EXPLAINING "await" and ".then()"
 * --------------------------------------------------
 *
 * Imagine you are asking your mom for a glass of milk.
 *
 * You say:
 *    "Mom, can I have milk?"
 *
 * Mom goes to the kitchen to pour it.
 *
 * While mom is pouring the milk, you WAIT.
 * You don't play with your toys or run outside.
 * You just WAIT until the milk is ready.
 *
 * In programming, sometimes we have to WAIT
 * for things like:
 *    - downloading data from the internet
 *    - reading a file
 *    - saving something in a database
 *
 * -------------------------------------------------
 * Using "await" is like saying:
 *
 *    "Please WAIT here until mom is done,
 *    then continue to the next thing."
 * -------------------------------------------------
 */

async function getMilkWithAwait() {
    console.log("Child: Mom, can I have milk?");

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mom: Here is your milk!");
            resolve();
        }, 2000); // Mom takes 2 seconds to pour milk
    });

    console.log("Child: Yay! Thank you, Mom!");
}

getMilkWithAwait();

/**
 * Output:
 * Child: Mom, can I have milk?
 * (waits 2 seconds...)
 * Mom: Here is your milk!
 * Child: Yay! Thank you, Mom!
 *
 * -------------------------------------------------
 * But we can also do the SAME THING
 * using ".then()" and ".catch()"
 *
 * -------------------------------------------------
 *
 * With ".then()", you say:
 *
 *    "When mom is done pouring the milk,
 *     THEN do the next thing."
 */

function getMilkWithThen() {
    console.log("Child: Mom, can I have milk?");

    new Promise((resolve, reject) => {
        setTimeout(() => {
            const milkSpilled = true;

            if (!milkSpilled) {
                console.log("Mom: Here is your milk!");
                resolve();
            } else {
                reject("Mom: Oops, I spilled the milk!");
            }
        }, 2000);
    })
    .then(() => {
        console.log("Child: Yay! Thank you, Mom!");
    })
    .catch((error) => {
        console.log("Child:", error);
    });
}

getMilkWithThen();

/**
 * Possible Output:
 * Child: Mom, can I have milk?
 * (waits 2 seconds...)
 * Mom: Here is your milk!
 * Child: Yay! Thank you, Mom!
 *
 * OR if there’s an error:
 * Child: Mom, Oops, I spilled the milk!
 *
 * ----------------------------------------------------
 *
 * So...
 * - "await" makes you WAIT for the milk
 *    before moving on.
 *
 * - ".then()" says:
 *      "When the milk is ready, THEN do this next."
 *
 * - ".catch()" catches any mistakes
 *    (like mom spilling the milk!)
 *
 */
