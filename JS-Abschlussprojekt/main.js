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


// Videos für die entsprechenden Skills
const skillVideos = {
  "skill-balken-js": "https://www.youtube.com/embed/eWLDAAMsD-c?autoplay=1",
  "skill-balken-react": "https://www.youtube.com/embed/qJqjcxLvEwg?autoplay=1",
  "skill-balken-angular": "https://www.youtube.com/embed/w1AXPd7gIvU?autoplay=1",
  "skill-balken-ts": "https://www.youtube.com/embed/tA1N4V0HnLI?autoplay=1",
  "skill-balken-mdb": "https://www.youtube.com/embed/jpTNn4zkMKY?autoplay=1",
  "skill-balken-eng": "https://www.youtube.com/embed/RqVR0Ls8QbY?autoplay=1",
  "skill-balken-team": "https://www.youtube.com/embed/ahM00W0Hwsc?autoplay=1",
  "skill-balken-ta": "https://www.youtube.com/embed/LqQ_J8JbIpo?autoplay=1",
  "skill-balken-bw": "https://www.youtube.com/embed/cfkYr0sHowI&t=37s?autoplay=1",
  "skill-balken-ch": "https://www.youtube.com/embed/nEkMTwr-f0I?autoplay=1"
};

// Selektiere alle Skill-Balken
const skillBalken = document.querySelectorAll(".thats-me-div.skills > div");

// Selektiere den Bereich, wo das Video angezeigt wird
const dynamicIn = document.getElementById("dynamic-in");

// Funktion für das Click-Event
skillBalken.forEach((balken) => {
  balken.addEventListener("click", function () {
    // Entferne den "active"-Status von allen Balken
    skillBalken.forEach((b) => b.classList.remove("active"));

    // Füge dem aktuellen Balken die "active"-Klasse hinzu
    this.classList.add("active");

    // Hole die passende Video-URL
    const videoUrl = skillVideos[this.classList[0]];

    // Zeige das Video im dynamic-in Bereich an
    if (videoUrl) {
      dynamicIn.innerHTML = `<iframe 
        src="${videoUrl}" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>`;
    }
  });
});


