import './style.css';
import xmasTree from './photos/xmastree.jpg'
import { xmasCountdown, countdown } from './modules/countdown.js';
import createSnowflake from './modules/snowflakes';
import sound1 from './audios/sleighbells.wav';
import sound2 from './audios/xmassong.wav';

const playSound2 = () => {
  const audio2 = new Audio(sound1);
  audio2.play();
};
const playSound = () => {
  const audio = new Audio(sound2);
  audio.play();
};

const decBackgr = document.querySelector('.december');

decBackgr.style.backgroundImage = `url('${xmasTree}')`;

setInterval(countdown, 1000);
setInterval(xmasCountdown, 1000);
setInterval(createSnowflake, 600);

const decLink = document.querySelector('.link-dec');

const xmasContainer = document.querySelector('.xmas');
const decContainer = document.querySelector('.december');

decLink.addEventListener('click', () => {
  playSound();
  xmasContainer.classList.remove('hide');
  decContainer.classList.add('hide');
});


const linkXmas = document.querySelector('.link-xmas');
linkXmas.addEventListener('click', () => {
  playSound2();
  xmasContainer.classList.add('hide');
  decContainer.classList.remove('hide');
});





