/*
🧠 What are these symbols?

>   → greater than  
<   → less than  
>=  → greater than or equal to  
<=  → less than or equal to  
==  → equal in value (loose comparison)  
=== → equal in value and type (strict comparison)

------------------------------------------------
🔢 Basic Examples:

5 > 3     // true    → 5 is bigger than 3  
2 < 1     // false   → 2 is not smaller than 1  
5 >= 5    // true    → equal is allowed  
7 <= 6    // false   → 7 is bigger than 6  

------------------------------------------------
⚖️ == vs ===

5 == "5"      // true    → only checks value  
5 === "5"     // false   → number ≠ string, checks value & type

0 == false    // true    → both are falsy  
0 === false   // false   → number ≠ boolean  

null == 0     // false   → special rule  
null === 0    // false   → different types  

undefined == null   // true     → loosely equal  
undefined === null  // false    → different types  

------------------------------------------------
🔍 Special Case: null & undefined

📌 `null` means → "nothing" (empty value)  
📌 `undefined` means → variable declared but no value assigned

💡 JavaScript treats them differently depending on the operator:

🔸 `null`:

null == undefined     → true  
null === undefined    → false  
null == 0             → false  
null === 0            → false  
null >= 0             → true (because null becomes 0)  
null > 0              → false  
null <= 0             → true (because null becomes 0)

🔸 `undefined`:

undefined == null     → true
undefined == 0        → false  
undefined === 0       → false  
undefined > 0         → false  
undefined < 0         → false  
undefined >= 0        → false  

------------------------------------------------
📊 Summary Table:

| Expression            | Result  | Why?                                    |
|-----------------------|---------|-----------------------------------------|
| null == undefined     | true    | loosely equal (special case)            |
| null === undefined    | false   | different types                         |
| null == 0             | false   | null ≠ 0                                |
| null >= 0             | true    | null becomes 0 → 0 >= 0                 |
| null > 0              | false   | 0 > 0 is false                          |
| undefined == 0        | false   | undefined is not equal to 0            |
| undefined >= 0        | false   | undefined → NaN → comparison false     |

------------------------------------------------
✅ Tips:

- Always prefer `===` over `==` to avoid confusion
- `null` loosely equals `undefined`, but not 0 or false
- `undefined` compared to numbers → always false
- `null` becomes 0 in math comparisons
- `undefined` becomes NaN (Not a Number)
*/

// ----------------------------------------------------------------------------------------------------------------------------------------- //

/*
📘 JavaScript: null vs 0 vs undefined (Simple Copy Notes)

🤔 Confusing: Why...
- null == 0        → false ❌
- null >= 0        → true ✅
- null == undefined → true ✅

Let’s understand clearly:

------------------------------------------------
1️⃣ null == undefined → ✅ true

👉 This is a special rule in JavaScript:
   null and undefined are loosely equal with ==

✔️ Example:
   null == undefined → true

📌 No conversion needed, JavaScript just says: OK, they match.

------------------------------------------------
2️⃣ null == 0 → ❌ false

👉 JavaScript does NOT convert null to 0 here.

✔️ Example:
   null == 0 → false

📌 Why?
   null is not a number. JavaScript keeps them as-is during ==

------------------------------------------------
3️⃣ null >= 0 → ✅ true

👉 Here JavaScript needs to compare numbers,
   so it converts null to number (which becomes 0)

✔️ Conversion:
   Number(null) → 0

✔️ Example:
   null >= 0 → becomes → 0 >= 0 → true

📌 So in math comparisons like >= or +, null becomes 0

------------------------------------------------
🧠 Summary Table:

| Expression         | Converts null? | What happens          | Result |
|--------------------|----------------|------------------------|--------|
| null == undefined  | No             | Special loose rule     | true   |
| null == 0          | No             | null ≠ 0               | false  |
| null >= 0          | Yes → to 0     | 0 >= 0                 | true   |
| null > 0           | Yes → to 0     | 0 > 0                  | false  |

------------------------------------------------
✅ Final Rules:

1. null == undefined → true (special case)

2. null != 0

3. null in math (>=, +, etc.) becomes 0

4. null == 0 → ❌ works differently  
   ➤ No type conversion happens here  
   ➤ null is not equal to 0 (false)

5. undefined in math becomes NaN → always false

*/