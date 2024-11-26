function toggleMenu() {
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('show');
  const button = document.getElementById('menu-btn');
  button.classList.toggle('hide');
}

// Close the menu if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
  if (!event.target.matches('.menu-btn')) {
    const button = document.getElementById('menu-btn');
    if (button.classList.contains('hide')) {
      button.classList.remove('hide');
    }
  }
}

// script.js
const track = document.querySelector('.carousel-track');
const boxes = document.querySelectorAll('.box');
const totalBoxes = boxes.length;

let currentIndex = 0;

function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalBoxes;
    const translateX = -currentIndex * 100; // Geser per box (100% lebar)
    track.style.transform = `translateX(${translateX}%)`;
}

// Pindah otomatis setiap 2 detik
setInterval(moveCarousel, 2000);




