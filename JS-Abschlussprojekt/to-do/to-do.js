const Eingabe = document.getElementById('eingabe');
const Display = document.getElementById('display');


function addTask() {
    const task = Eingabe.value;
    if (task) {
        Display.innerHTML += `<li>${task}</li>`;
        Eingabe.value = '';
    }
}