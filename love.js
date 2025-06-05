// Slideshow
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 5000);

// Corações animados
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Texto revelador com digitação automática
const revelacaoTexto = document.getElementById("revelacaoTexto");
const texto = "Desde o dia em que te conheci, tudo mudou.\nVocê é a melhor parte do meu mundo. 💖";
let index = 0;

function escrever() {
  if (index < texto.length) {
    revelacaoTexto.textContent += texto.charAt(index);
    index++;
    setTimeout(escrever, 60);
  }
}

setTimeout(escrever, 1000);

// Música
const playPauseBtn = document.getElementById("playPauseBtn");
const audio = document.getElementById("audio");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️ Pausar Música";
  } else {
    audio.pause();
    playPauseBtn.textContent = "🔊 Tocar Música";
  }
});

// Slideshow de texto
let textSlides = document.querySelectorAll(".text-slide");
let currentText = 0;

function showTextSlide(index) {
  textSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextTextSlide() {
  currentText = (currentText + 1) % textSlides.length;
  showTextSlide(currentText);
}

showTextSlide(currentText);
setInterval(nextTextSlide, 5000);

