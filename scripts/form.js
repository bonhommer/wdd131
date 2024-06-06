const products = [
  { id: 'fc-1888', name: 'flux capacitor', avgRating: 4.5 },
  { id: 'fc-2050', name: 'power laces', avgRating: 4.7 },
  { id: 'fs-1987', name: 'time circuits', avgRating: 3.5 },
  { id: 'ac-2000', name: 'low voltage reactor', avgRating: 3.9 },
  { id: 'jj-1969', name: 'warp equalizer', avgRating: 5.0 }
];

  document.addEventListener("DOMContentLoaded", () => {
    const productNameSelect = document.getElementById("productName");

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
    });

    if (window.location.pathname.endsWith('review.html')) {
      let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10) || 0;
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
      document.getElementById('review-count').textContent = reviewCount;
  }
  })
 

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