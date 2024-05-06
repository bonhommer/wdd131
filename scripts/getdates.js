document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtenir la date de dernière modification
    var lastModified = document.lastModified;

    // Mettre à jour le texte de la balise <span> dans le paragraphe
    var lastModifiedSpan = document.getElementById("lastModifiedValue");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = lastModified;
    }
});

