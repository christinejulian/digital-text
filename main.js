// main.js

console.log("1900 silent‑film mode active (sepia + scratches + grain)");

/* ---------------------------------------------------------
   CREATE OVERLAY ELEMENTS
--------------------------------------------------------- */

// Sepia tint overlay
const sepiaLayer = document.createElement("div");
sepiaLayer.className = "sepia";
document.body.appendChild(sepiaLayer);

// Film scratches overlay
const scratchLayer = document.createElement("div");
scratchLayer.className = "scratches";
document.body.appendChild(scratchLayer);

// Film grain overlay
const grainLayer = document.createElement("div");
grainLayer.className = "film-grain";
document.body.appendChild(grainLayer);

// Vignette overlay
const vignetteLayer = document.createElement("div");
vignetteLayer.className = "vignette";
document.body.appendChild(vignetteLayer);


/* ---------------------------------------------------------
   AUDIO SYSTEM
--------------------------------------------------------- */

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


/* ---------------------------------------------------------
   OPTIONAL CONTROLS
--------------------------------------------------------- */

// Adjust sepia tint strength
function setSepia(level = 0.25) {
  sepiaLayer.style.background = `rgba(112, 66, 20, ${level})`;
}

// Adjust scratch visibility
function setScratchIntensity(level = 0.35) {
  scratchLayer.style.opacity = level;
}

// Adjust grain visibility
function setGrainIntensity(level = 0.25) {
  grainLayer.style.opacity = level;
}


/* ---------------------------------------------------------
   DEFAULT LOOK
--------------------------------------------------------- */

setSepia(0.25);           // warm sepia wash
setScratchIntensity(0.35); // visible scratches
setGrainIntensity(0.25);   // subtle grain

console.log("Silent‑film overlays initialized.");
