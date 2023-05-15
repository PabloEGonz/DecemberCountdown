import './style.css';
import xmasTree from './photos/xmastree.jpg'
import { xmasCountdown, countdown } from './modules/countdown.js';
import createSnowflake from './modules/snowflakes';
import { playSound, playSound2 } from './modules/playSounds';
import { showXmas, showDec } from './modules/displaySections';
const decBackgr = document.querySelector('.december');

decBackgr.style.backgroundImage = `url('${xmasTree}')`;

setInterval(countdown, 1000);
setInterval(xmasCountdown, 1000);
setInterval(createSnowflake, 600);

const decLink = document.querySelector('.link-dec');
decLink.addEventListener('click', () => {
  playSound();
  showXmas();
});

const linkXmas = document.querySelector('.link-xmas');
linkXmas.addEventListener('click', () => {
  playSound2();
  showDec();
});





