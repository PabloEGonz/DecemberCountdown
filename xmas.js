const xmas = new Date("December 24 2023 00:00:00");

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