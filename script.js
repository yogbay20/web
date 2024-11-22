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

const box = document.querySelector('.gambar');
let hasMoved = false;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const triggerPoint = 200;

  if (scrollPosition > triggerPoint && !hasMoved) {
    box.style.left = '200px';
    hasMoved = true;
  }
})