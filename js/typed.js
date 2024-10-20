const typedText = document.getElementById('typed-text');
const words = [
    "Etudiant en 2ème année de BUT informatique à l'IUT de Reims.", 
    "Spécialisé en développement C++.",
    "Développeur Web."
];
const tTypeErase = 30;
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(typeWord, tTypeErase);
  } else {
    setTimeout(eraseWord, 1500);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, tTypeErase);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, 500);
  }
}

setTimeout(typeWord, 500);
