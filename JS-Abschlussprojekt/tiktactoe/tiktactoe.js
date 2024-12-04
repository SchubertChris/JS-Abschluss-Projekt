// Spielzustandsvariablen
const player1Symbol = '🧟'; // Symbol für Spieler 1
const player2Symbol = '🧌'; // Symbol für Spieler 2
let activePlayer = player1Symbol; // Aktiver Spieler, beginnt mit Spieler 1
let boardState = Array(9).fill(null); // Zustand des Spielfelds, initial leer
let player1Score = 0; // Punktestand Spieler 1
let player2Score = 0; // Punktestand Spieler 2

// Gewinnkombinationen (Reihen, Spalten, Diagonalen)
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Reihen
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Spalten
  [0, 4, 8], [2, 4, 6]              // Diagonalen
];

// DOM-Elemente
const cells = document.querySelectorAll('.cell'); // Spielfeldzellen
const display = document.querySelector('.display'); // Anzeige für Nachrichten
const scoreDisplay = document.querySelector('.score'); // Anzeige für Punktestand
const board = document.querySelector('.tiktactoe-board'); // Spielfeld

// Initialisiert das Spiel
function initializeGame() {
  boardState.fill(null); // Setzt das Spielfeld zurück
  activePlayer = player1Symbol; // Setzt den aktiven Spieler zurück
  
  cells.forEach((cell, index) => {
    cell.innerHTML = ''; // Leert die Zellen
    cell.classList.remove('filled', 'winning-cell'); // Entfernt Klassen
    cell.setAttribute('data-hover-symbol', index % 2 === 0 ? '🧟' : '🧌'); // Setzt Hover-Symbol
    
    cell.removeEventListener('click', handleCellClick); // Entfernt alten Klick-Listener
    cell.addEventListener('click', handleCellClick); // Fügt neuen Klick-Listener hinzu
  });
  
  display.textContent = ''; // Leert die Anzeige
  removeWinningLine(); // Entfernt die Gewinnlinie
}

// Behandelt Klicks auf Zellen
function handleCellClick(event) {
  const cell = event.currentTarget;
  const index = Array.from(cells).indexOf(cell);

  if (cell.classList.contains('filled')) return; // Abbrechen, wenn Zelle bereits gefüllt

  cell.innerHTML = activePlayer; // Setzt das Symbol des aktiven Spielers
  cell.classList.add('filled'); // Markiert die Zelle als gefüllt
  boardState[index] = activePlayer; // Aktualisiert den Spielfeldzustand

  const winningCombo = checkWin(activePlayer); // Überprüft auf Gewinn
  if (winningCombo) {
    const winner = activePlayer === player1Symbol ? 'Player 1' : 'Player 2';
    updateScore(winner); // Aktualisiert den Punktestand
    displayWinningCombination(winningCombo); // Zeigt die Gewinnkombination an
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick)); // Entfernt Klick-Listener
    setTimeout(initializeGame, 2000); // Startet das Spiel neu
    return;
  }

  if (boardState.every(cell => cell !== null)) {
    display.textContent = 'Draw!'; // Unentschieden
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick)); // Entfernt Klick-Listener
    setTimeout(initializeGame, 2000); // Startet das Spiel neu
    return;
  }

  activePlayer = activePlayer === player1Symbol ? player2Symbol : player1Symbol; // Wechselt den aktiven Spieler
  updateHoverSymbols(); // Aktualisiert die Hover-Symbole
}

// Überprüft, ob ein Spieler gewonnen hat
function checkWin(player) {
  return winningCombinations.find(combination => 
    combination.every(index => boardState[index] === player)
  );
}

// Zeigt die Gewinnkombination an
function displayWinningCombination(combo) {
  display.textContent = `Winning cells: ${combo.join(', ')}`; // Zeigt die Gewinnzellen an
  
  // Markiert die Gewinnzellen
  combo.forEach(index => {
    cells[index].classList.add('winning-cell');
  });

  // Zeichnet die Gewinnlinie
  drawWinningLine(combo);
}

// Zeichnet die Gewinnlinie
function drawWinningLine(combo) {
  const line = document.createElement('div');
  line.classList.add('winning-line');
  board.appendChild(line);

  const firstCell = cells[combo[0]];
  const lastCell = cells[combo[2]];

  const boardRect = board.getBoundingClientRect();
  const firstRect = firstCell.getBoundingClientRect();
  const lastRect = lastCell.getBoundingClientRect();

  const startX = firstRect.left - boardRect.left + firstRect.width / 2;
  const startY = firstRect.top - boardRect.top + firstRect.height / 2;
  const endX = lastRect.left - boardRect.left + lastRect.width / 2;
  const endY = lastRect.top - boardRect.top + lastRect.height / 2;

  line.style.position = 'absolute';
  line.style.left = `${startX}px`;
  line.style.top = `${startY}px`;
  line.style.width = `${Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))}px`;
  line.style.transform = `rotate(${Math.atan2(endY - startY, endX - startX) * 180 / Math.PI}deg)`;
}

// Entfernt die Gewinnlinie
function removeWinningLine() {
  const existingLine = board.querySelector('.winning-line');
  if (existingLine) {
    board.removeChild(existingLine);
  }
}

// Aktualisiert den Punktestand
function updateScore(winner) {
  if (winner === 'Player 1') {
    player1Score++;
  } else {
    player2Score++;
  }
  scoreDisplay.textContent = `Player 1: ${player1Score} | Player 2: ${player2Score}`;
}

// Aktualisiert die Hover-Symbole
function updateHoverSymbols() {
  cells.forEach((cell, index) => {
    if (!cell.classList.contains('filled')) {
      cell.setAttribute('data-hover-symbol', activePlayer === player1Symbol ? '🧟' : '🧌');
    }
  });
}

// Startet das Spiel, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', initializeGame);



/* 
PSEUDOCODE:

Spielzustandsvariablen
- Symbol für Spieler 1
- Symbol für Spieler 2
- Aktiver Spieler
- Zustand des Spielfelds
- Punktestand Spieler 1
- Punktestand Spieler 2

Gewinnkombinationen
- Reihen
- Spalten
- Diagonalen

DOM-Elemente
- Spielfeldzellen
- Anzeige für Nachrichten
- Anzeige für Punktestand
- Spielfeld
*/