function toggleContent(btn, id) {
  const content = document.getElementById(id);
  const isVisible = content.style.display === 'block';

  document.querySelectorAll('.content-box').forEach(el => el.style.display = 'none');
  document.querySelectorAll('h2').forEach(h => h.classList.remove('active'));

  if (!isVisible) {
    content.style.display = 'block';
    btn.classList.add('active');
  } else {
    content.style.display = 'none';
    btn.classList.remove('active');
  }

  if (navigator.vibrate) navigator.vibrate(40);
}

let currentUtterance = null;

function readText(button) {
  if (currentUtterance) {
    speechSynthesis.cancel();
  }
  const text = button.parentElement.querySelector('p').innerText;
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = 'te-IN';
  speechSynthesis.speak(currentUtterance);
}

function pauseSpeech() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
}
