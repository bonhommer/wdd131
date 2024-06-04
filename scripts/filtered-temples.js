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

hideCloseButtonOnLargeScreen()

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "images/aba-nigeria.svg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "images/manti-utah.svg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "images/payson-utah.svg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "images/yigo-guam.svg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "images/washington.svg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "images/lima-peru.svg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "images/mexico-city.svg"
    },
    {
      templeName: "Atlanta Georgia",
      location: "Sandy Springs, Georgia, United States",
      dedicated: "1983, June, 4",
      area: 34500,
      imageUrl:
      "images/atlanta-georgia.svg"
    },
    {
      templeName: "Madrid Spain",
      location: "Madrid, Spain",
      dedicated: "1999, March, 21",
      area: 45800,
      imageUrl: 
      "images/madrid-spain.svg"
    },
    {
      templeName: "Chicago Illinois",
      location:"Glenview, Illinois, United States",
      dedicated:"1985, August, 13",
      area: 37062,
      imageUrl:
      "images/chicago-illinois.svg"

    }
  ];

createTempleCard(temples);

const oldtemples = document.querySelector("#oldtemples");

oldtemples.addEventListener("click", () =>{
  const filteredTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split("-")[0], 10);
    return year < 1900;
  });
  createTempleCard(filteredTemples);
});

const newtemples= document.querySelector("#newtemples");

newtemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => {
  const year = parseInt(temple.dedicated.split("-")[0], 10);
  return year > 2000;
  });
  createTempleCard(filteredTemples);
})

const largetemples= document.querySelector("#largetemples");

largetemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => {
    const largearea = temple.area;
  return largearea > 90000;
  })
  createTempleCard(filteredTemples);
})

const smalltemples= document.querySelector("#smalltemples");

smalltemples.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => {
  const smallarea = temple.area;
  return smallarea < 10000;
  })
  createTempleCard(filteredTemples);
})

const alltemples= document.querySelector("#home");

alltemples.addEventListener("click", () => {
  createTempleCard(temples);
})

function createTempleCard(filteredTemples){
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple=> {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="Label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  })
}


