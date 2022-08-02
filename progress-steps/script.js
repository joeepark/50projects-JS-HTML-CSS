const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let progressTracker = 1;

next.addEventListener('click', () => {
  if (progressTracker === circles.length) {
    progressTracker = circles.length;
  } else {
    progressTracker++;
  }
  update();
  console.log(progressTracker)
})

prev.addEventListener('click', () => {
  if (progressTracker <= 1) {
    progressTracker = 1;
  } else {
    progressTracker--;
  }
  update();
  console.log(progressTracker)
})

console.log(circles);

function update() {
  circles.forEach((circle, idx) => {
    if (progressTracker > idx) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })


  const actives = document.querySelectorAll('.active');

  // if progresstracker = 1 then have the width be 1
  // if progresstracker = 2 then increase the bar to 2

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  if (progressTracker === 1) {
    prev.disabled = true
  } else if (progressTracker === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}