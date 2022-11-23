setInterval(setClock, 1000);
const hourhand = document.getElementById('hourHand');
const minutehand = document.getElementById('minuteHand');
const secondhand = document.getElementById('secondsHand');

function setClock() {
  const currentdate = new Date();
  const secondsRatio = currentdate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentdate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentdate.getHours()) / 12;
  setRotation(secondhand, secondsRatio);
  setRotation(minutehand, minutesRatio);
  setRotation(hourhand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
