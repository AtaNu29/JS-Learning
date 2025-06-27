/*
✅ What is "switch"?
Imagine your robot friend has a menu with buttons labeled:
- "jan"
- "feb"
- "march"
- "april"

Robot looks at the month and presses the matching button. If no button matches, it uses the DEFAULT button.

✅ Syntax:

switch (key) {
    case value:
        
        break;

    default:
        break;
}

✅ Example:
We have month = "march"
Robot checks each case:
- Is it "jan"? → No.
- Is it "feb"? → No.
- Is it "march"? → YES! Robot prints "march"
- Then it stops checking because of the break.

✅ Table:
| Keyword | Meaning |
|---------|---------|
| switch  | Starts the switch check |
| case    | One possible value to match |
| break   | Stops checking further |
| default | Runs if no cases match |

*/
const month = "march";

switch (month) {
  case "jan":
    console.log("January"); // won't run
    break;
  case "feb":
    console.log("feb"); // won't run
    break;
  case "march":
    console.log("march"); // march
    break;
  case "april":
    console.log("april"); // won't run
    break;
  default:
    console.log("default case match"); // won't run because "march" matched
    break;
}
