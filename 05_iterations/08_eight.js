/* -----------------------------------------
   ✅ .reduce
----------------------------------------- */

const myNums = [1, 2, 3];

/*
Explanation:
- reduce loops through each number.
- acc is the running total.
- curr is the current number from the array.
- 0 is the starting value for acc.
*/

const myTotal = myNums.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr;
}, 0);

console.log("Total sum:", myTotal);
// Output:
// acc: 0, curr: 1
// acc: 1, curr: 2
// acc: 3, curr: 3
// Total sum: 6

/* -----------------------------------------
   ✅ Example 2 - Shopping cart total price
----------------------------------------- */

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

/*
Explanation:
- Start from 0.
- For each item, add item.price to acc.
- This way we get the total price of the cart.
*/

const priceToPay = shoppingCart.reduce((acc, item) => {
    console.log(`acc: ${acc}, item price: ${item.price}`);
    return acc + item.price;
}, 0);

console.log("Total price to pay:", priceToPay);
// Output:
// acc: 0, item price: 2999
// acc: 2999, item price: 999
// acc: 3998, item price: 5999
// acc: 9997, item price: 12999
// Total price to pay: 22996
