const currentYear = new Date().getFullYear();
const december = new Date("December 1 2023 00:00:00");
const xmas = new Date("December 24 2023 00:00:00");

function countdown(){
    const current = new Date();
    const left = december - current;
    const d = Math.floor(left / 1000 / 60 / 60 / 24);   
    const h = Math.floor((left / 1000 / 60 / 60) % 24); 
    const m = Math.floor((left / 1000 / 60) % 60);
    const s = Math.floor((left / 1000 ) % 60); 
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h < 10 ? "0" + h : h;
    document.getElementById('min').innerHTML = m < 10 ? "0" + m : m;
    document.getElementById('sec').innerHTML = s < 10 ? "0" + s : s;
}
setInterval(countdown, 1000);
 
function xmasCountdown(){
    const sitting = new Date();
    const remaining = xmas - sitting;
    const d = Math.floor(remaining / 1000 / 60 / 60 / 24);   
    const h = Math.floor((remaining / 1000 / 60 / 60) % 24); 
    const m = Math.floor((remaining / 1000 / 60) % 60);
    const s = Math.floor((remaining / 1000 ) % 60); 
    document.getElementById('xday').innerHTML = d;
    document.getElementById('xhour').innerHTML = h < 10 ? "0" + h : h;
    document.getElementById('xmin').innerHTML = m < 10 ? "0" + m : m;
    document.getElementById('xsec').innerHTML = s < 10 ? "0" + s : s;
}
setInterval(xmasCountdown, 1000);
