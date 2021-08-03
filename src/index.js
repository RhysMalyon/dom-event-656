// console.log("Hi Batch #656");

// ////////
// Select DOM elements
// ////////

// with its ID (Sae)
// const saeImg = document.querySelector("#sae");
// console.log(saeImg);
// with its tag type (h2)
const h2 = document.querySelector("h2");
// console.log(h2);
// with its class (group)
const group = document.querySelector(".group");
// console.log(group);
// by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);

// Shorten version
// const ul = document.querySelector(".group ul");

// select multiple elements (all the card)
const cards = document.querySelectorAll(".card");
// console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (SafeSpaces FC 🗼)
const ul = document.querySelector(".group ul");
console.log(ul);
ul.insertAdjacentHTML(
  "beforeend",
  "<li>SafeSpaces <em>FC</em> 🗼</li>"
);

// same but more complex (add Pierre!!)
const ikujiTeam = document.querySelector("#ikujitime ul");
ikujiTeam.insertAdjacentHTML(
  "beforeend",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/85116141?v=4" alt="" />
    <p>Pierre</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
group.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");


// add/remove every 1sec
setInterval(() => {
  // group.classList.toggle("text-white");
}, 1000);

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "yann@me.com";

// Read/Write the (inner) text and HTML content (FF RenRaku ⚽️ title)
const renrakuCardH3 = document.querySelector("#ff-renraku h3");
console.log(renrakuCardH3.innerText);
console.log(renrakuCardH3.innerHTML);

renrakuCardH3.innerHTML = "Hello <strong>everyone</strong>!";

// ////////
// Add event listeners
// ////////

// // 1. Select Sae's picture
// const saeImg = document.querySelector("#sae");

// // 2. Listen to a click
// saeImg.addEventListener("click", (event) => {
//   // 3. Modify the DOM (add the class selected)
//   console.log(event);
//   event.currentTarget.classList.toggle("selected");
// });

// 1. Select all pictures
const cardImgs = document.querySelectorAll(".card img");

cardImgs.forEach((cardImg) => {
  // 2. Listen to a click
  cardImg.addEventListener("click", (event) => {
    // 3. Modify the DOM
    event.currentTarget.classList.toggle("selected");
  });
});
