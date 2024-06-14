// Funtionen
// return
// Gültigkeitbereich: Bereich in dem man Zugriff auf eine Variable erlaubt.
// Globale Variablen: Variablen die in allen Funktionen verfügbar sind und außerhalb aller Codeblöcke definiert.
// Lokale Variablen: Variablen die nur in einer Funktion verfügbar sind und außerhalb der Funktion nicht definiert.

let variable_1 = "Variable 1";

const meine_funktion = function () {
  let variable_2 = "Variable 2";

  if (true) {
    let variable_3 = "Variable 3";

    console.log(variable_3);
  }

  console.log(variable_1);
  console.log(variable_2);
  // console.log(variable_3);
};

meine_funktion();

console.log(variable_1);
// console.log(variable_2);
// console.log(variable_3);
