const panels = document.querySelectorAll('.cards');

panels.forEach(panel => {
  // console.log(panel.classList);
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}