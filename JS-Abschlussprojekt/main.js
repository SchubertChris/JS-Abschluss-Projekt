/* Angebunden an index.html */

/* PSEUDOCDE FÜR DYNAMISCHES LOGO MIT HOME UND DROP FUNKTION 

1. Logo erstellen
2. Logo mit Home-Button verknüpfen (LINK)
3. Drop-Down-Menü erstellen
  - Drop-Down-Menü mit den Unterkategorien verknüpfen (LINK)
*/

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('nav ul');
  const anker = document.querySelectorAll('nav ul li a');
  anker.forEach(element => {
    element.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
  console.log(anker);
  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });  
  const contactsite = document.getElementById('kontaktID');
  contactsite.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = '/JS-Abschlussprojekt/danke.html';
  });
});