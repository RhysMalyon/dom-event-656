// console.log("Hi Batch #595");

// ////////
// Select DOM elements
// ////////

// with its ID (allan)
const allanImg = document.querySelector("#allan");
// console.log(allanImg);

// with its tag type (h2)
const h2 = document.querySelector("h2");
// console.log(h2);

// with its class (group)
const studentGroups = document.querySelector(".group");
// console.log(studentGroups);

// by nest selection (ul of the group)
const ul = studentGroups.querySelector("ul");
// console.log(ul);
// select multiple elements (all the card)
const cards = document.querySelectorAll(".card");
// console.log(cards);
// ////////
// Modify the DOM
// ////////

// add an HTML element (Kyoro FC 🗼 in list)
// console.log(ul);
ul.insertAdjacentHTML(
  "beforeend", 
  `<li>Kyoro <em>FC</em> 🗼</li>`);

// same but more complex (add Simon!!)
const billsTeam = document.querySelector("#bills ul");
billsTeam.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/44258144?v=4" alt="">
    <p>Simon</p>
  </li>`);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
studentGroups.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
studentGroups.classList.add("text-white");

// remove it
studentGroups.classList.remove("text-white");

// add/remove every 1sec
setInterval(() => {
  studentGroups.classList.toggle("text-white");
}, 4000);

// Read/Write for inputs (change the value in the email input)
const emailInput = document.querySelector("#email");
// console.log(emailInput.value);
emailInput.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (FF BAIKU ⚽️ title)
const h3Baiku = document.querySelector("#ff-baiku > h3");
console.log(h3Baiku.innerText);
console.log(h3Baiku.innerHTML);

h3Baiku.innerHTML = "Hello <strong>#595</strong>";

// ////////
// Add event listeners
// ////////

// // 1. Select allan's picture
// const allan = document.querySelector("#allan");
// // 2. Listen to a click
// allan.addEventListener("click", (event) => {
//   // 3. Modify the DOM (add the class selected)
//   // event.currentTarget referes to what you click
//   event.currentTarget.classList.toggle("selected");
// });


// 1. Select all pictures
const pictures = document.querySelectorAll(".card img");

console.log(pictures);

pictures.forEach((picture) => {
  // 2. Listen to a click
  picture.addEventListener("click", (event) => {
    // 3. Modify the DOM
    event.currentTarget.classList.toggle("selected");
  });
});

