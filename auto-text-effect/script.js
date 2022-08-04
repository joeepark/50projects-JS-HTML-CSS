const header = document.querySelector('h1');
const number = document.querySelector('#number');

let text = 'WELCOME TO PROGRAMMING';
let idx = 1;
let speed = 300 / number.value;

increaseSpeed();

function increaseSpeed () {
  header.innerHTML = text.slice(0, idx);
  // console.log(number.value);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(increaseSpeed, speed);
}


number.addEventListener('input', (e) => {
  // console.log(e);
  speed = 300 / e.target.value;
})