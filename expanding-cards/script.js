const panel = document.querySelectorAll('.cards');

panel.forEach(panel => {
  panel.addEventListener('click', () => {
    panel.classList.add('active');
  })
})

// function removeActiveClasses() {

// }