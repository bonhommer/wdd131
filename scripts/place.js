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


    // Fonction pour calculer le wind chill factor
    function calculateWindChill(temperature, windSpeed) {
        // Vérification que la température est en degrés Celsius et la vitesse du vent en kilomètres par heure
        // Formule pour calculer le wind chill factor
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }

    // Fonction pour mettre à jour l'élément HTML avec le wind chill factor calculé
    function updateWindChill() {
        // Obtention de la température et de la vitesse du vent depuis le HTML
        var temperature = parseFloat(document.querySelector('.celcius').textContent); // Conversion en nombre décimal
        var windSpeed = parseFloat(document.querySelector('.wind-value').textContent); // Conversion en nombre décimal

        // Calcul du wind chill factor
        var windChillFactor = calculateWindChill(temperature, windSpeed);

        // Mise à jour de l'élément HTML avec le wind chill factor calculé
        document.getElementById('wind-chill-factor').textContent = windChillFactor.toFixed(2); // Affichage avec 2 décimales
    }

    // Appel de la fonction pour mettre à jour le wind chill factor au chargement de la page
    window.onload = updateWindChill;

