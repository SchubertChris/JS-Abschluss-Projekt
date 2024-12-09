/* Angebunden an index.html */

/* PSEUDOCDE FÜR DYNAMISCHES LOGO MIT HOME UND DROP FUNKTION 

1. Logo erstellen
2. Logo mit Home-Button verknüpfen (LINK)
3. Drop-Down-Menü erstellen
  - Drop-Down-Menü mit den Unterkategorien verknüpfen (LINK)
4. Drop-Down-Menü ein- und ausblenden
  - Drop-Down-Menü einblenden, wenn auf das Logo geklickt wird
  - Drop-Down-Menü ausblenden, wenn auf das Logo geklickt wird, während das Drop-Down-Menü sichtbar ist
5. Drop-Down-Menü ausblenden, wenn auf einen Link im Drop-Down-Menü geklickt wird
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


/* SKILL BEREICH / Videos/BTns */
/* Pseudocode */
/* 1. Skills auswählen
2. Video-URLs für die Skills definieren
3. Eventlistener für die Skills hinzufügen
4. Wenn ein Skill geklickt wird, entferne die Klasse "active" von allen Skills
*/

// Videos für die entsprechenden Skills
const skillVideos = {
  "skill-balken-js": "https://www.youtube.com/embed/eWLDAAMsD-c?autoplay=1",
  "skill-balken-react": "https://www.youtube.com/embed/qJqjcxLvEwg?autoplay=1",
  "skill-balken-angular": "https://www.youtube.com/embed/w1AXPd7gIvU?autoplay=1",
  "skill-balken-ts": "https://www.youtube.com/embed/tA1N4V0HnLI?autoplay=1",
  "skill-balken-mdb": "https://www.youtube.com/embed/jpTNn4zkMKY?autoplay=1",
  "skill-balken-eng": "https://www.youtube.com/embed/Q3l2ygTf-nI?autoplay=1",
  "skill-balken-team": "https://www.youtube.com/embed/ahM00W0Hwsc?autoplay=1",
  "skill-balken-ta": "https://www.youtube.com/embed/LqQ_J8JbIpo?autoplay=1",
  "skill-balken-bw": "https://www.youtube.com/embed/Kn0aiUuvZ9g?autoplay=1",
  "skill-balken-ch": "https://www.youtube.com/embed/nEkMTwr-f0I?autoplay=1"
};

const skillBalken = document.querySelectorAll(".thats-me-div.skills > div");
const dynamicIn = document.getElementById("dynamic-in");

skillBalken.forEach((balken) => {
  balken.addEventListener("click", function () {
    skillBalken.forEach((b) => b.classList.remove("active"));
// b. kann auch als balken geschrieben werden, ist nur kürzer	er erkennt, dass es sich um das gleiche handelt
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


/* Kontaktformular */
/* const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, nachname, Vorwahl, Telefon, email, betreff, nachricht } = req.body;

  // Konfiguriere deinen E-Mail-Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail-Beispiel
    auth: {
      user: 'schubert_chris@rocketmail.com', // Ersetze mit deiner E-Mail-Adresse
      pass: process.env.EMAIL_PASSWORD // Passwort aus Umgebungsvariablen
    }
  });

  const mailOptions = {
    from: email,
    to: 'schubert_chris@rocketmail.com', // Zieladresse
    subject: `${betreff}`,
    text: `Name: ${name} ${nachname}\nTelefon: ${Vorwahl} ${Telefon}\nNachricht: ${nachricht}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('E-Mail wurde erfolgreich gesendet!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Fehler beim Versenden der E-Mail.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
 */