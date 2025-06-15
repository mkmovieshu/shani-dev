// Load GitHub text files
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section-text").forEach(el => {
    const url = el.getAttribute("data-url");
    fetch(url)
      .then(res => res.text())
      .then(text => el.innerHTML = text.replace(/\n/g, "<br>"))
      .catch(err => el.innerHTML = "లోడ్ చేయడంలో పొరపాటు: " + err);
  });
});

function toggleContent(btn, id) {
  const content = document.getElementById(id);
  const isVisible = content.style.display === "block";

  document.querySelectorAll(".content-box").forEach(el => el.style.display = "none");
  document.querySelectorAll("h2").forEach(h => h.classList.remove("active"));

  if (!isVisible) {
    content.style.display = "block";
    btn.classList.add("active");
  } else {
    content.style.display = "none";
    btn.classList.remove("active");
  }

  if (navigator.vibrate) navigator.vibrate(30);
}

// Text Reader
let currentUtterance;
function readText(button) {
  const text = button.parentElement.querySelector(".section-text").innerText;
  stopText(); // Stop previous
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = "te-IN";
  speechSynthesis.speak(currentUtterance);
}

function stopText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
}

// YouTube Videos Navigation
const videoIds = [
  "9U1P7vK1OP4", // replace with your actual video IDs
  "J9HnN3Gv4Iw",
  "z7gxlzmxAK8",
  "5YvMHrZhwD0",
  "EkIMLiWBGdI"
];
let currentIndex = 0;

function updateVideo() {
  const iframe = document.getElementById("yt-player");
  iframe.src = `https://www.youtube.com/embed/${videoIds[currentIndex]}`;
}

function prevVideo() {
  currentIndex = (currentIndex - 1 + videoIds.length) % videoIds.length;
  updateVideo();
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videoIds.length;
  updateVideo();
}
