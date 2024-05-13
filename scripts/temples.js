document.addEventListener("DOMContentLoaded",function() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
    }
})

document.addEventListener('DOMContentLoaded', function(){
    const currentDate = document.lastModified;
    const currentDateSpan =document.getElementById("lastmodified");
    if (currentDateSpan) {
        currentDateSpan.textContent = currentDate;
    }
})

function toggleMenu() {
    var menuItems = document.querySelectorAll('.menu-item');
    var menuToggle = document.querySelector('.menu-toggle');
    var closeMenuBtn = document.querySelector('.close-menu');

    menuItems.forEach(function(item) {
        item.classList.toggle('show');
    })

    menuToggle.classList.toggle('hide');
    closeMenuBtn.classList.toggle('hide');

    if (window.innerWidth <= 597 && !menuToggle.classList.contains('hide')) {
        closeMenuBtn.classList.remove('hide');
    }
}



function hideCloseButtonOnLargeScreen() {
    var closeMenuBtn = document.querySelector('.close-menu');
    if (window.innerWidth > 640 && !closeMenuBtn.classList.contains('hide')) {
        closeMenuBtn.classList.add('hide');
    } else {
        closeMenuBtn.classList.remove('hide'); // Assurez-vous que le bouton "X" est visible sur les petits écrans
    }
}

var menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

var closeMenuBtn = document.querySelector('.close-menu');
closeMenuBtn.addEventListener('click', toggleMenu);

const mediaQueryList = window.matchMedia('(min-width: 641px)');
if (mediaQueryList.matches){
    hideCloseButtonOnLargeScreen();
    toggleMenu();
}
// window.addEventListener('resize', function() {
//     hideCloseButtonOnLargeScreen();
//     toggleMenu();
// });

hideCloseButtonOnLargeScreen()

// function toggleMenu() {
//     var menuItems = document.querySelectorAll('.menu-item');
//     menuItems.forEach(function(item) {
//       item.classList.toggle('show')
//     });
// }

// function closeMenu() {
//     var menuItems = document.querySelectorAll('.menu-item');
//     menuItems.forEach(function(item) {
//         item.classList.remove('show'); // Supprime la classe 'show' pour fermer le menu
//     });
// }

// var hamburger = document.querySelector('.menu-toggle');
// hamburger.addEventListener('click', toggleMenu);

// var closeBtn = document.querySelector('.close');
// closeBtn.addEventListener('click', closeMenu);