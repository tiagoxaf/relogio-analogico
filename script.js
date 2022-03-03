

const tbody = "<div class='relogio'><div class='centro1'></div><div class='centro2'></div><div class='indicadores'><div></div><div></div><div id='3'>3</div><div></div><div></div><div id='6'>6</div><div></div><div></div><div id='9'>9</div><div></div><div></div><div id='12'>12</div></div><div class='sec-hand'><div class='sec'></div></div><div class='min-hand'><div class='min'></div></div><div class='hr-hand'><div class='hr'></div></div></div>"
document.body.innerHTML += tbody;
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hr = document.querySelector('.hr');

setInterval(function () {
  let time = new Date();
  let h = time.getHours() * 30;
  let m = time.getMinutes() * 6;
  let s = time.getSeconds() * 6;
  hr.style.transform = `rotateZ(${h + (m / 12)}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
});