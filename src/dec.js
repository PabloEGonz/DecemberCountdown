
const december = new Date("December 1 2023 00:00:00");

let countdown = () => {
  const current = new Date();
  const left = december - current;
  let day = document.querySelector("#day");
  let hour = document.querySelector("#hour");
  let min = document.querySelector("#min");
  let sec = document.querySelector("#sec");
  const d = Math.floor(left / 1000 / 60 / 60 / 24);
  const h = Math.floor((left / 1000 / 60 / 60) % 24);
  const m = Math.floor((left / 1000 / 60) % 60);
  const s = Math.floor((left / 1000) % 60);
  day.innerText = d;
  hour.innerText = h < 10 ? "0" + h : h;
  min.innerText = m < 10 ? "0" + m : m;
  sec.innerText = s < 10 ? "0" + s : s;
}
setInterval(countdown, 1000);

const playSound = () => {
  const audio = new Audio("audios/xmassong.wav");
  audio.play();
};

const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
  document.querySelector('.snow-container').appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 9000);
}
setInterval(createSnowflake, 600);



const xmas = new Date("December 24 2023 00:00:00");

let xmasCountdown = () => {
  const sitting = new Date();
  const remaining = xmas - sitting;
  let day = document.querySelector("#xday");
  let hour = document.querySelector("#xhour");
  let min = document.querySelector("#xmin");
  let sec = document.querySelector("#xsec");
  const d = Math.floor(remaining / 1000 / 60 / 60 / 24);
  const h = Math.floor((remaining / 1000 / 60 / 60) % 24);
  const m = Math.floor((remaining / 1000 / 60) % 60);
  const s = Math.floor((remaining / 1000) % 60);
  day.innerHTML = d;
  hour.innerHTML = h < 10 ? "0" + h : h;
  min.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(xmasCountdown, 1000);
let playSound2 = () => {
  let audio2 = new Audio("audios/sleighbells.wav");
  audio2.play();
};



