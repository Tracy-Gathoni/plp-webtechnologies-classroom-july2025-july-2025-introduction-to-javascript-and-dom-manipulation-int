// ===============================
// 🎯 Part 1: Basics
// ===============================

function checkNumber() {
  let number = prompt("Enter a number:");
  number = Number(number);

  if (number > 10) {
    document.getElementById("basic-output").textContent =
      number + " is greater than 10!";
  } else if (number === 10) {
    document.getElementById("basic-output").textContent = "Number is exactly 10!";
  } else {
    document.getElementById("basic-output").textContent =
      number + " is less than 10!";
  }
}

// ===============================
// ❤️ Part 2: Functions
// ===============================

// Function 1: Greeting
function showGreeting() {
  const name = prompt("What's your name?");
  document.getElementById("function-output").textContent =
    "Hello, " + name + "! Welcome to JavaScript.";
}

// Function 2: Calculate total price
function calculateTotal() {
  let price = Number(prompt("Enter price:"));
  let quantity = Number(prompt("Enter quantity:"));
  let total = price * quantity;

  document.getElementById("function-output").textContent =
    "Total = $" + total;
}

// ===============================
// 🔁 Part 3: Loops
// ===============================

// Example 1: Countdown using for loop
function showCountdown() {
  let output = "";
  let ul = document.getElementById("loop-output");
  ul.innerHTML = ""; // Clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = "Countdown: " + i;
    ul.appendChild(li);
  }
}

// Example 2: Array iteration with forEach
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => {
  console.log("Fruit: " + fruit);
});

// ===============================
// 🌐 Part 4: DOM Manipulation
// ===============================

// Change heading text
function changeHeading() {
  document.querySelector("h1").textContent =
    "✨ Heading Changed with JavaScript!";
}

// Toggle CSS highlight class
function toggleHighlight() {
  document.getElementById("dom-output").classList.toggle("highlight");
}

// Add new item to list
function addNewItem() {
  let ul = document.getElementById("dom-list");
  let li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
}
