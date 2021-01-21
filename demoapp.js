// Lisätään kuuntelijat

// Eka nappi
var el = document.querySelector("button");
el.addEventListener("click", function () {
  console.log("Painoit ekaa nappia!");
});

// Toka nappi
var b2 = document.querySelectorAll("button")[1];
b2.addEventListener("click", function () {
  console.log("Painoit tokaa nappia!");
});

var t = document.getElementById("app");
t.innerHTML = "<h1>Tervetuloa käyttämään sovellusta</h1>";