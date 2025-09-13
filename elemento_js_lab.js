// ======================
// Activity 1: Variables and Functions
// ======================
let name = "Vivian Joy Elemento";
let age = 30;

function greetUser(n, a) {
  return "Hello, I am " + n + " and I am " + a + " years old.";
}

console.log(greetUser(name, age));


// ======================
// Activity 2: DOM Manipulation
// ======================
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// ======================
// Activity 3: Debugging and Enhancement
// ======================
window.onload = function() {
  let btn = document.getElementById("btn");
  let text = document.getElementById("colorText");

  btn.onclick = function() {
    console.log("Before:", document.body.style.backgroundColor);

    let newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    text.innerText = "Current color: " + newColor;

    alert("Background changed to " + newColor);
    console.log("After:", newColor);
  }
}
