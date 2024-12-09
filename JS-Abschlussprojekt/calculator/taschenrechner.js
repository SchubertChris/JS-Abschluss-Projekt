
const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");

// Variablen für die Berechnung
let currentValue = ""; 
let storedValue = ""; 
let operator = ""; 

// Eventlistener (Click für jeden Button)
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value"); // Wert des Buttons holen

    // Wenn "C", alles zurücksetzen
    if (value === "C") {
      currentValue = "";
      storedValue = "";
      operator = "";
      display.value = "0"; // Anzeige zurücksetzen wenn null setze nicht zurück
    }
    else if (["+", "-", "*", "/"].includes(value)) {
      if (currentValue) {
        storedValue = currentValue; 
        operator = value; 
        currentValue = "";
      }
    }
    else if (value === "%") {
      if (currentValue) {
        currentValue = String(parseFloat(currentValue) / 100);
        display.value = currentValue; // Ergebnis anzeigen
      }
    }
    // Letztes Zeichen löschen
    else if (value === "DEL") {
      if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1); // Letztes Zeichen entfernen
      } else {
        currentValue = ""; // Wenn nur ein Zeichen übrig ist, lösche alles
      }
      display.value = currentValue || "0"; // Zeige '0', wenn currentValue leer ist
    }
    // Gleichheitszeichen "=" - Berechnung ausführen
    else if (value === "=") {
      if (operator && currentValue) {
        const num1 = parseFloat(storedValue) || 0; // Verhindert NaN bei leerem storedValue
        const num2 = parseFloat(currentValue) || 0; // Verhindert NaN bei leerem currentValue

        switch (operator) {
          case "+":
            currentValue = String(num1 + num2);
            break;
          case "-":
            currentValue = String(num1 - num2);
            break;
          case "*":
            currentValue = String(num1 * num2);
            break;
          case "/":
            currentValue = num2 !== 0 ? String(num1 / num2) : "Error"; // Division durch 0 abfangen
            break;
        }
        display.value = currentValue; // Ergebnis anzeigen
        storedValue = ""; // Zwischenspeicher zurücksetzen
        operator = ""; // Operator zurücksetzen
      }
    }
    // Zahlen und Dezimalpunkte hinzufügen
    else {
      if (value === "." && currentValue.includes(".")) {
        // Verhindert mehrere Dezimalpunkte
        return;
      }
      currentValue += value; // Eingabe fortsetzen
      display.value = currentValue; // Anzeige aktualisieren
    }
  });
});
