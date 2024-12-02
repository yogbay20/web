// Toggle Menu untuk Dropdown
function toggleList() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
    const button = document.getElementById('list-btn');
    button.classList.toggle('hide');
  }
  
  // Close the menu if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.list-btn')) {
      const dropdown = document.getElementById('dropdown');
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
    if (!event.target.matches('.list-btn')) {
      const button = document.getElementById('list-btn');
      if (button.classList.contains('hide')) {
        button.classList.remove('hide');
      }
    }
  }


// Toggle Menu
let isMenuVisible = false;
function toggleMenu() {
    const menu = document.getElementById("menuContent");
    const button = document.getElementById("btn-toggle-menu");

    if (!isMenuVisible) {
        menu.style.display = "block";
        button.innerText = "Sembunyikan Menu";
        button.style.marginBottom = "20px";
    } else {
        menu.style.display = "none";
        button.innerText = "Tampilkan Menu";
        button.style.marginBottom = "0px";
    }
    isMenuVisible = !isMenuVisible;
}

// Carousel (Slider)
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

// Swipe Functionality
const container = document.querySelector('.touch-container');
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const movementX = currentX - startX;
    currentTranslate = prevTranslate + movementX;
    container.style.transform = `translateX(${currentTranslate}px)`;
});

container.addEventListener('touchend', () => {
    isDragging = false;
    prevTranslate = currentTranslate;

    // Batasi geser agar tidak keluar dari container
    const maxScroll = -(container.scrollWidth - container.clientWidth);
    if (currentTranslate > 0) {
        currentTranslate = 0;
    } else if (currentTranslate < maxScroll) {
        currentTranslate = maxScroll;
    }

    container.style.transition = 'transform 0.3s ease-out';
    container.style.transform = `translateX(${currentTranslate}px)`;

    setTimeout(() => {
        container.style.transition = 'none';
    }, 300);
});