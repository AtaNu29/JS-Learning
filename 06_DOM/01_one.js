// Find an element by ID
const heading = document.getElementById("myHeading");

// Change its text
heading.textContent = "Hello, I am learning DOM!";

// Find the first <p> tag
const paragraph = document.querySelector("p");

// Change its text
paragraph.textContent = "JavaScript can change me!";

// Change style
paragraph.style.color = "blue";
paragraph.style.fontSize = "20px";

// Find the button
const button = document.getElementById("btn");

// Find all elements matching selector
const allParas = document.querySelectorAll("p");

// Loop through them
allParas.forEach(function(item) {
  console.log("Paragraph text:", item.textContent);
});

/*
| **Action**                | **Code Example**                                      |
| ------------------------- | ----------------------------------------------------- |
| Get by ID                 | `document.getElementById("idName")`                   |
| Get one element           | `document.querySelector("selector")`                  |
| Get all matching elements | `document.querySelectorAll("selector")`               |
| Change text               | `element.textContent = "Hello!"`                      |
| Change style              | `element.style.color = "red";`                        |

*/

// Create a new element
const newPara = document.createElement("p");

// Change its text using textContent
newPara.textContent = "I am a new paragraph added by JS!";

// Change style
newPara.style.color = "green";

// Add it to the body
document.body.appendChild(newPara);

// Now let's change the text using innerText
newPara.innerText = "Changed using innerText";

// Or change it using innerHTML (adds tags inside!)
newPara.innerHTML = "<strong>Changed using innerHTML!</strong>";

// ✅ Create a new image
const myImg = document.createElement("img");

// ✅ Use a working image URL (Open Source image)
myImg.setAttribute("src", "https://picsum.photos/200");

// ✅ Set alt attribute
myImg.setAttribute("alt", "Random placeholder image");

// ✅ Optional styling
myImg.style.marginTop = "10px";
myImg.style.borderRadius = "10px";

// ✅ Add the image to the body
document.body.appendChild(myImg);

// ✅ Get an attribute value
const altText = myImg.getAttribute("alt");
console.log("The alt text is:", altText);

// ✅ Remove the new paragraph after 3 seconds
setTimeout(() => {
  newPara.remove();
}, 3000);

/*
📝 Quick Cheat Sheet:

| **Property/Method** | **Use For**                                    |
| ------------------- | ---------------------------------------------- |
| `textContent`       | Plain text only                                |
| `innerText`         | Text visible on the page (ignores hidden text) |
| `innerHTML`         | HTML tags and text                             |
| `getAttribute()`    | Read an attribute value                        |
| `setAttribute()`    | Set/change an attribute value                  |
| `.remove()`         | Remove an element from the page                |

*/