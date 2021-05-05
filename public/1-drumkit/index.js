function play(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // se non c'è un audio con quel determinato keyCode, allora uscire dalla funzione
  audio.currentTime = 0; //(rewind)
  audio.play(); // in caso contrario, riprodurre l'audio selezionato
  key.classList.add("playing"); // riga 3
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key"); // viene creato un array
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// keyCode = numero che corrisponde ad una determinata lettera della tastiera
window.addEventListener("keydown", play);
