"use strict";

// Task 1
document.querySelector("#hider").addEventListener("click", () => {
  document.querySelector("#text").classList.toggle("hidden");
});

// Task 2
const div = document.createElement("div");
const h2 = document.createElement("h2");
const h2Text = document.createTextNode("Misha");
const anchor = document.createElement("a");
const anchorText = document.createTextNode("Go to profile");
anchor.setAttribute("href", "#");
div.setAttribute("id", "card");
document.querySelector("body").appendChild(div);
div.appendChild(h2);
h2.appendChild(h2Text);
anchor.appendChild(anchorText);
div.appendChild(anchor);

// Task 3
document.querySelector("#card").style.backgroundColor = "red";
