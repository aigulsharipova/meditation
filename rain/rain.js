const timer = 5;
const amountTime = timer * 60;

function calculateTime() {
  const countdown = document.querySelector('#countdown');

  let minutes = Math.floor(amountTime/60);
  let seconds = amountTime % 60;

  if(amountTime < 0) {
    stopTimer()
    amountTime = 0
  }
  
  countdown.textContent = `${minutes} : ${seconds}`;
  amountTime --;
}

let timerId = setInterval(calculateTime, 1000);