"use strict";
// // Definiere eine Funktion für eine Begrüessung.
// Diese Funktion soll 3 Parametern wiedergeben (Vorname, Nachname und Alter).
// Console.log("Hallo Ruben Winkler, du bist 24 Jahre alt!")
// Für alle Parametern default-Werte (Vorname => Default Max, Nachname => default Mustermann, Alter => 18
// Drei Variable definieren, name, nachname & alter außerhalb der Funktion und setze deine Daten (Alberto, Cabrera, 45 Jahre
// Rufe einmal alle Parameter mit
// Rufe einmal alle Parameter aus

const begruessung = function (
  vorname = "Max",
  nachname = "Mustermann",
  alter = 18
) {
  console.log(`Hallo ${vorname} ${nachname} du bist ${alter} Jahre alt.`);
};

let vorname = "Alberto";
let nachname = "Cabrera";
let alter = 45;

begruessung(vorname, nachname, alter);
begruessung();
