// "use strict"

// //   Schreibe eine Funktion, die 2 Parametern ausgibt. Diese sollen 2 Zahlen sein.
// Es sollen 5 console.logs geben und in jedem sollte eine Grundrechnenform vorhanden sein. +, -, *, /, %.
// Anschließend definiere 5 Variablen zwischen 0-100.

"use strict";
const mathe_magie = function (a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
};

let z_1 = 23;
let z_2 = 54;
let z_3 = 99;
let z_4 = 77;
let z_5 = 5;

mathe_magie(z_1, z_5);
mathe_magie(z_4, z_2);
mathe_magie(z_3, z_2);
mathe_magie(z_5, z_2);
mathe_magie(z_1, z_5);
