// For

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5-is best number");
    }
    console.log(element); // prints 0,1,2,3,4,5-is best number,5,6,7,8,9,10
}

// console.log(element); // Error: element is block-scoped

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`); // Outer loop value: 1 ... 10
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`); // shows j and i
        console.log(`${i} * ${j} = ${i * j}`); // multiplication table
    }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // flash, batman, superman
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`); // Detected 5
        break;
    }
    console.log(`Value of i is ${index}`); // prints until 4
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`); // Detected 5
        continue;
    }
    console.log(`Value of i is ${index}`); // skips printing 5
}

// ✅ Difference between break and continue (Clear Table)
// | Keyword   | Action                                | When it Happens                   | Example Effect                        |
// |-----------|----------------------------------------|------------------------------------|----------------------------------------|
// | break     | Exits the loop completely              | When condition is met             | Stops at that point and skips rest     |
// | continue  | Skips current iteration, continues loop | When condition is met             | Skips current step, goes to next loop  |

// 🔹 break: Think of a robot walking. If it hits a wall → stop.
// 🔹 continue: Robot sees a puddle → skips it and walks forward.