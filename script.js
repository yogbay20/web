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


// // script.js
const container = document.querySelector('.touch-container');
let startX = 0; // Posisi awal saat sentuhan dimulai
let currentTranslate = 0; // Posisi translate saat ini
let prevTranslate = 0; // Posisi translate sebelumnya
let isDragging = false; // Status sentuhan aktif

// Menangani sentuhan awal
container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Posisi awal sentuhan (x-axis)
    isDragging = true;
});

// Menangani pergerakan sentuhan
container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const movementX = currentX - startX;
    currentTranslate = prevTranslate + movementX;

    // Menggeser box sesuai pergerakan sentuhan
    container.style.transform = `translateX(${currentTranslate}px)`;
});

// Menangani akhir sentuhan
container.addEventListener('touchend', () => {
    isDragging = false;
    prevTranslate = currentTranslate;

    // Opsi: Batasi geser ke kiri/kanan agar tidak keluar dari area kontainer
    const maxScroll = -(container.scrollWidth - container.clientWidth); // Geser maksimal
    if (currentTranslate > 0) {
        currentTranslate = 0;
    } else if (currentTranslate < maxScroll) {
        currentTranslate = maxScroll;
    }

    // Kembalikan posisi ke batas terdekat
    container.style.transition = 'transform 0.3s ease-out';
    container.style.transform = `translateX(${currentTranslate}px)`;
    prevTranslate = currentTranslate;

    // Matikan transisi setelah animasi selesai
    setTimeout(() => {
        container.style.transition = 'none';
    }, 300);
});


