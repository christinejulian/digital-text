// main.js

console.log("Silent‑film game engine active");

/* ---------------------------------------------------------
   OVERLAYS
--------------------------------------------------------- */

const sepiaLayer = document.createElement("div");
sepiaLayer.className = "sepia";
document.body.appendChild(sepiaLayer);

const scratchLayer = document.createElement("div");
scratchLayer.className = "scratches";
document.body.appendChild(scratchLayer);

const grainLayer = document.createElement("div");
grainLayer.className = "film-grain";
document.body.appendChild(grainLayer);

const vignetteLayer = document.createElement("div");
vignetteLayer.className = "vignette";
document.body.appendChild(vignetteLayer);


/* ---------------------------------------------------------
   AUDIO
--------------------------------------------------------- */

const audioEl = document.getElementById("titanicAudio");

function startAudio() {
  audioEl.play().catch(() => {});
}

function resetAudio() {
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}


/* ---------------------------------------------------------
   PLAYER STATS
--------------------------------------------------------- */

let courage = 0;
let awareness = 0;
let compassion = 0;

function choose(stat, amount) {
  if (stat === "courage") courage += amount;
  if (stat === "awareness") awareness += amount;
  if (stat === "compassion") compassion += amount;

  console.log(`Stats → Courage: ${courage}, Awareness: ${awareness}, Compassion: ${compassion}`);

  checkEnding();
}


/* ---------------------------------------------------------
   ENDING LOGIC
--------------------------------------------------------- */

const endings = {
  safeEscape: {
    title: "Ending I — Safe Escape",
    text: "Your awareness guides you. You reach a lifeboat in time and survive the night."
  },
  hero: {
    title: "Ending II — The Hero",
    text: "Your courage keeps you aboard. You save lives, even as the ship sinks beneath you."
  },
  lastLifeboat: {
    title: "Ending III — The Last Lifeboat",
    text: "Your compassion leads you to help others. A crew member pulls you into the final lifeboat."
  },
  tooLate: {
    title: "Ending IV — Too Late",
    text: "You hesitate too long. The ship tilts sharply as the Atlantic claims it."
  },
  echoBelow: {
    title: "Ending V — The Echo Below",
    text: "Your mixed choices lead you into the lower decks. Shadows move. The ship whispers its final breath."
  }
};

function determineEnding() {
  if (awareness >= 5) return endings.safeEscape;
  if (courage >= 5) return endings.hero;
  if (compassion >= 5) return endings.lastLifeboat;

  if (courage <= 2 && awareness <= 2 && compassion <= 2)
    return endings.tooLate;

  return endings.echoBelow;
}

function checkEnding() {
  const ending = determineEnding();

  const card = document.getElementById("endingCard");
  const text = document.getElementById("endingText");

  card.innerHTML = `<div class="intertitle-text">${ending.title}</div>`;
  text.innerHTML = `<p>${ending.text}</p>`;

  card.style.display = "block";
  text.style.display = "block";

  setTimeout(() => {
    card.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    text.style.opacity = "1";
    text.style.transition = "opacity 1.8s ease-in-out";
  }, 1800);
}


/* ---------------------------------------------------------
   START GAME
--------------------------------------------------------- */

function startGame() {
  startAudio();

  const titleCard = document.getElementById("titleCard");
  titleCard.style.opacity = "1";
}


/* ---------------------------------------------------------
   VISUAL SETTINGS
--------------------------------------------------------- */

setSepia(0.25);
setScratchIntensity(0.35);
setGrainIntensity(0.25);

function setSepia(level) {
  sepiaLayer.style.background = `rgba(112, 66, 20, ${level})`;
}

function setScratchIntensity(level) {
  scratchLayer.style.opacity = level;
}

function setGrainIntensity(level) {
  grainLayer.style.opacity = level;
}

console.log("Game engine initialized.");
