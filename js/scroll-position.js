// Sauvegarder la position de défilement dans le localStorage avant de quitter la page
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Restaurer la position de défilement lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition !== null) {
        // Temporisation pour laisser le temps au contenu de charger
        setTimeout(() => {
            // Vérifiez si la position est un nombre valide
            const position = parseInt(savedPosition, 10);
            if (!isNaN(position)) {
                window.scrollTo({
                    top: position,
                    behavior: 'smooth' // Défilement fluide
                });
            }
        }, 500); // Ajustez ce délai si nécessaire
    }
});
