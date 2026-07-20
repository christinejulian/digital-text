// main.js

console.log("1900 film‑grain cinema mode active");

// ---------------------------------------------------------
// FILM GRAIN + VIGNETTE SETUP (NO FLICKER)
// ---------------------------------------------------------

// Create film grain layer
const grainLayer = document.createElement("div");
grainLayer.className = "film-grain";
document.body.appendChild(grainLayer);

// Create vignette layer
const vignetteLayer = document.createElement("div");
vignetteLayer.className = "vignette";
document.body.appendChild(vignetteLayer);

// ---------------------------------------------------------
// INTERTITLE SYSTEM
// ---------------------------------------------------------
const intertitleOverlay = document.getElementById("intertitleTransition");
const intertitleText = document.getElementById("intertitleText");

function showIntertitle(text) {
  intertitleText.textContent = text;
  intertitleOverlay.classList.add("active");

  setTimeout(() => {
    intertitleOverlay.classList.remove("active");
  }, 1800);
}

// ---------------------------------------------------------
// AUDIO SYSTEM
// ---------------------------------------------------------
const audioEl = document.getElementById("titanicAudio");

function startAudio() {
  if (!audioEl) return;
  audioEl.play().catch(() => {
    console.log("Audio autoplay blocked; waiting for user interaction.");
  });
}

function resetAudio() {
  if (!audioEl) return;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}

// ---------------------------------------------------------
// OPTIONAL: Adjust film grain intensity dynamically
// ---------------------------------------------------------
function setFilmGrainIntensity(level = 0.25) {
  grainLayer.style.opacity = level;
}

// Initialize grain level
setFilmGrainIntensity(0.25);
