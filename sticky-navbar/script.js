const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav () {
  // If the nav goes to a certain point then add the active tag to the nav
  if (window.scrollY > 300) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}