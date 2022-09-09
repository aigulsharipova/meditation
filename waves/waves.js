const timer = 5;
let amountTime = timer * 60;

function calculateTime() {
  const countdown = document.querySelector('#countdown');
  let minutes = Math.floor(amountTime/60);
  let seconds = amountTime % 60;
  countdown.textContent = `${minutes} : ${seconds}`;
  amountTime --;
  if (amountTime < 0) {
    stopTimer();
    amountTime = 0;
    function stopTimer() {
      clearInterval(timerID);
    }
  }
}
setInterval(calculateTime, 1000);