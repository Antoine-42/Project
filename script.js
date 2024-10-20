document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById("close-dialog");
    const overlay = document.getElementById("welcome-overlay");
    const cvContent = document.getElementById("cv-content");

    // Gère la fermeture de la pop-up de bienvenue
    closeBtn.addEventListener("click", function () {
        overlay.classList.add("hidden");

        // Masque la pop-up une fois l'animation terminée et affiche le CV
        overlay.addEventListener('animationend', () => {
            overlay.style.display = "none";
            cvContent.style.display = "block";
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.overflow = "auto";
        }, { once: true });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const experiencesTitle = document.getElementById("experiences-title");
    const experiencesContent = document.getElementById("experiences-content");
    const skillsTitle = document.getElementById("skills-title");
    const skillsContent = document.getElementById("skills-content");

    // Gère l'ouverture/fermeture de la section "Expériences"
    experiencesTitle.addEventListener("click", function () {
        experiencesTitle.classList.toggle("active");
        experiencesContent.style.maxHeight = experiencesContent.style.maxHeight ? null : experiencesContent.scrollHeight + "px";
    });

    // Gère l'ouverture/fermeture de la section "Compétences"
    skillsTitle.addEventListener("click", function () {
        skillsTitle.classList.toggle("active");
        skillsContent.style.maxHeight = skillsContent.style.maxHeight ? null : skillsContent.scrollHeight + "px";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const observationTitle = document.getElementById("observation-title");
    const observationContent = document.getElementById("observation-content");

    // Gère l'ouverture/fermeture de la section "Stage d'Observation"
    observationTitle.addEventListener("click", function () {
        observationTitle.classList.toggle("active");
        observationContent.style.maxHeight = observationContent.style.maxHeight ? null : observationContent.scrollHeight + "px";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const formationTitle = document.getElementById("formation-title");
    const formationContent = document.getElementById("formation-content");

    // Gère l'ouverture/fermeture de la section "Formation"
    formationTitle.addEventListener("click", function () {
        formationTitle.classList.toggle("active");
        formationContent.style.maxHeight = formationContent.style.maxHeight ? null : formationContent.scrollHeight + "px";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const interestsTitle = document.getElementById("interests-title");
    const interestsContent = document.getElementById("interests-content");

    // Gère l'ouverture/fermeture de la section "Intérêts et Loisirs"
    interestsTitle.addEventListener("click", function () {
        interestsTitle.classList.toggle("active");
        interestsContent.style.maxHeight = interestsContent.style.maxHeight ? null : interestsContent.scrollHeight + "px";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-content");
    let posX = 50; // Position initiale (en pixels)
    let posY = 50;
    let speedX = 2; // Vitesse de déplacement sur l'axe X
    let speedY = 2;

    function movePopup() {
        posX += speedX;
        posY += speedY;

        // Vérifier les collisions avec les bords de la fenêtre
        if (posX <= 0 || posX + popup.offsetWidth >= window.innerWidth) {
            speedX = -speedX; // Inverse la direction sur X
        }
        if (posY <= 0 || posY + popup.offsetHeight >= window.innerHeight) {
            speedY = -speedY; // Inverse la direction sur Y
        }

        // Mettre à jour la position du popup
        popup.style.left = posX + "px";
        popup.style.top = posY + "px";

        requestAnimationFrame(movePopup); // Demande une nouvelle frame pour continuer l'animation
    }

    movePopup(); // Lancer l'animation

    // Gère la fermeture de la pop-up de bienvenue lorsqu'on clique sur le bouton
    document.getElementById("close-dialog").addEventListener("click", function () {
        document.getElementById("welcome-overlay").style.display = "none";
    });
});
document.getElementById("close-dialog").addEventListener("click", function () {
    document.getElementById("welcome-overlay").style.display = "none";
    document.getElementById("cv-content").style.display = "block"; // Affiche le CV
});