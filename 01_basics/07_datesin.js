// JavaScript Date - Complete Reference

// 1️⃣ Create a Date object - like saying "Hey computer! What day is it today?"
const d = new Date();
console.log("Now:", d); // Shows the full date and time right now

// 2️⃣ Get individual parts of the date - like breaking a LEGO date into small blocks 🧱
console.log("Year:", d.getFullYear());       // e.g., 2025 - This tells you the year
console.log("Month:", d.getMonth());          // 0 = Jan, 11 = Dec - Months start from 0, silly!
console.log("Date:", d.getDate());            // 1–31 - This tells you which day of the month
console.log("Day:", d.getDay());              // 0 = Sun, 6 = Sat - This tells you what day of the week
console.log("Hours:", d.getHours());          // 0–23 - What time it is (hour)
console.log("Minutes:", d.getMinutes());      // 0–59 - How many minutes past the hour
console.log("Seconds:", d.getSeconds());      // 0–59 - Tick-tock seconds
console.log("Milliseconds:", d.getMilliseconds()); // 0–999 - Tiny time pieces!
console.log("Time (ms since 1970):", d.getTime()); // Time counted in milliseconds since Jan 1, 1970
console.log("Timezone Offset:", d.getTimezoneOffset()); // How far your time is from the world's time (UTC)

// 3️⃣ Set parts of the date - like changing your birthday on a toy calendar 🗓️
d.setFullYear(2024);       // Change the year to 2024
d.setMonth(11);            // Change to December (0 = Jan, so 11 = Dec)
d.setDate(25);             // Set day of month to 25

d.setHours(10);            // Set hour to 10

d.setMinutes(30);          // Set minutes to 30

d.setSeconds(45);          // Set seconds to 45

d.setMilliseconds(500);    // Set milliseconds to 500

d.setTime(1718880000000);  // Set exact time using a big number (milliseconds since 1970)
console.log("Updated Date:", d); // Shows the changed date

// 4️⃣ Convert date to different string formats - dress it up in different costumes 👗🎭
console.log("toString():", d.toString());
// Full costume: everything (date + time + timezone)

console.log("toDateString():", d.toDateString());
// Just the date part: looks like "Fri Jun 20 2025"

console.log("toTimeString():", d.toTimeString());
// Just the time part: "10:30:45 GMT+0530"

console.log("toLocaleString():", d.toLocaleString());
// Shows date & time in your country’s style

console.log("toLocaleDateString():", d.toLocaleDateString());
// Just the date in local format (like 20/6/2025)

console.log("toLocaleTimeString():", d.toLocaleTimeString());
// Just the time in local format (like 10:30 AM)

console.log("toUTCString():", d.toUTCString());
// Global style date: for internet and space people 🌍

console.log("toISOString():", d.toISOString());
// Computer-friendly, saves well in files (2025-06-20T...Z)

console.log("toJSON():", d.toJSON());
// Same as ISO – used when you send date in JSON

// 5️⃣ Create custom date objects - travel to any date you want! 🚀
const customDate = new Date(2002, 4, 10); // May 10, 2002 (Remember: 4 = May)
const withTime = new Date(2025, 5, 20, 22, 30); // 20 June 2025, 10:30 PM

// 6️⃣ Compare Dates - is one date before another?
const date1 = new Date("2025-06-20");
const date2 = new Date("2025-06-21");
console.log("date1 < date2:", date1 < date2); // true! 20th is before 21st

// 7️⃣ Date arithmetic - add 1 day to today, like turning the page of a calendar 📅
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 to today's date
console.log("Tomorrow:", tomorrow);

// 8️⃣ Show birthday message - Surprise! 🎂
const myBirthday = new Date(2002, 4, 10);
const today = new Date();
if (today.getMonth() === myBirthday.getMonth() && today.getDate() === myBirthday.getDate()) {
  console.log("🎂 Happy Birthday!");
} else {
  console.log("📅 Not your birthday today!");
}

// 🎨 Fancy formatting using toLocaleDateString() with options
// It's like telling JavaScript: "Hey, I want the full day name and year only!"
console.log(d.toLocaleDateString('default', {
  month: 'long', // Full month name (like 'June')
  day: 'numeric', // Day of the month (like 20)
  weekday: 'long', // Full name of the weekday (like 'Friday')
  year: 'numeric' // Full year (like 2025)
})); 
// Output example: Thursday, 20 June 2024
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(d.toLocaleDateString('bn-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})); 
// Output example: "শনিবার, ২১ জুন, ২০২৫"

/*
| 🔹 `new Date()` | Returns the full current date and time |
| --------------- | -------------------------------------- |
| 🔹 `Date.now()` | Returns the timestamp in milliseconds  |
*/

// 🎉 That’s it! You now understand Date in JavaScript like a superhero coder in kindergarten! 🚀
