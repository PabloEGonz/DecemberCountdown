
const december = new Date("December 1 2023 00:00:00");

let countdown =() =>{
    const current = new Date();
    const left = december - current;
    let day = document.querySelector("#day");
    let hour = document.querySelector("#hour");
    let min = document.querySelector("#min");
    let sec = document.querySelector("#sec");
    const d = Math.floor(left / 1000 / 60 / 60 / 24);   
    const h = Math.floor((left / 1000 / 60 / 60) % 24); 
    const m = Math.floor((left / 1000 / 60) % 60);
    const s = Math.floor((left / 1000 ) % 60); 
    day.innerText = d;
    hour.innerText = h < 10 ? "0" + h : h;
    min.innerText = m < 10 ? "0" + m : m;
    sec.innerText = s < 10 ? "0" + s : s;
}
setInterval(countdown, 1000);

let playSound = () => {
    let audio = new Audio("audios/xmassong.wav");
    audio.play();
};

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
  document.querySelector('.snow-container').appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 50000);
}

setInterval(createSnowflake, 1000);


 

