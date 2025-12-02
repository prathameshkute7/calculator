const hourHand   = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours   = now.getHours() % 12;

  // Correct degrees (12 ko 0° mana gaya hai)
  const secondDeg = (seconds * 6);           // 360/60 = 6
  const minuteDeg = (minutes * 6) + (seconds * 0.1);
  const hourDeg   = (hours * 30) + (minutes * 0.5);  // 360/12 = 30

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform   = `rotate(${hourDeg}deg)`;

  requestAnimationFrame(updateClock);
}

updateClock();   // turant start