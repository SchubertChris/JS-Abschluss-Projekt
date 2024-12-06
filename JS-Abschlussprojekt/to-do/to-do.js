
document.getElementById('add-task-btn').addEventListener('click', function() {
 
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});

/* 
PSEUDOCODE: 
- Event-Listener auf Button
- Inputfeld auslesen
- Wert trimmen
- Wenn Wert nicht leer ist
  - Liste auslesen
  - Neues Listenelement erstellen
  - Textinhalt des Listenelements auf Wert des Inputfelds setzen
  - Button zum Löschen des Listenelements erstellen
  - Event-Listener auf Button zum Löschen hinzufügen
  - Button zum Listenelement hinzufügen
  - Listenelement zur Liste hinzufügen
  - Inputfeld leeren
*/