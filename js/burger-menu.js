const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');
const body = document.body;

// Fonction pour ouvrir le menu
function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    body.classList.add('no-scroll'); // Empêche le défilement
}

// Fonction pour fermer le menu
function closeMenuFunc() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    body.classList.remove('no-scroll'); // Restaure le défilement
}

// Événements pour ouvrir/fermer le menu
burgerMenu.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
overlay.addEventListener('click', closeMenuFunc);
