const currentYear = new Date().getFullYear();
const december = new Date("December 1 2023 00:00:00");

function countdown(){
    const current = new Date();
    const left = december - current;
    const d = Math.floor(left / 1000 / 60 / 60 / 24);   
    const h = Math.floor((left / 1000 / 60 / 60) % 24); 
    const m = Math.floor((left / 1000 / 60) % 60);
    const s = Math.floor((left / 1000 ) % 60); 
    document.getElementById('day').innerHTML = d;
    console.log(d);
    document.getElementById('hour').innerHTML = h < 10 ? "0" + h : h;
    document.getElementById('min').innerHTML = m < 10 ? "0" + m : m;
    document.getElementById('sec').innerHTML = s < 10 ? "0" + s : s;
}
setInterval(countdown, 1000);
 