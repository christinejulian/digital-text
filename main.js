// main.js

console.log("Silent‑film Titanic project loaded.");

// -------------------------------
// ELEMENT REFERENCES
// -------------------------------
const curtainLeft = document.getElementById("curtainLeft");
const curtainRight = document.getElementById("curtainRight");
const intertitleOverlay = document.getElementById("intertitleTransition");
const intertitleText = document.getElementById("intertitleText");
const audioEl = document.getElementById("titanicAudio");

// -------------------------------
// CURTAIN ANIMATION
// -------------------------------
function openCurtains() {
  curtainLeft.classList.add("curtain-open-left");
  curtainRight.classList.add("curtain-open-right");
}

function closeCurtains() {
  curtainLeft.classList.remove("curtain-open-left");
  curtainRight.classList.remove("curtain-open-right");
}

// -------------------------------
// INTERTITLE TRANSITION
// -------------------------------
function showIntertitle(text) {
  intertitleText.textContent = text;
  intertitleOverlay.classList.add("active");

  // Fade out after silent‑film pause
  setTimeout(() => {
    intertitleOverlay.classList.remove("active");
  }, 1800);
}

// -------------------------------
// AUDIO CONTROL
// -------------------------------
function startAudio() {
  if (!audioEl) return;
  audioEl.play().catch(() => {
    console.log("Audio autoplay blocked; will start on user interaction.");
  });
}

function resetAudio() {
  if (!audioEl) return;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}

// -------------------------------
// OPTIONAL: CLOSE CURTAINS WHEN SCROLLING TO TOP
// -------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY < 50) {
    closeCurtains();
  }
});
