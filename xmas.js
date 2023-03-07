const xmas = new Date("December 24 2023 00:00:00");

let xmasCountdown = () =>{
    const sitting = new Date();
    const remaining = xmas - sitting;
    let day = document.querySelector("#xday");
    let hour = document.querySelector("#xhour");
    let min = document.querySelector("#xmin");
    let sec = document.querySelector("#xsec");
    const d = Math.floor(remaining / 1000 / 60 / 60 / 24);   
    const h = Math.floor((remaining / 1000 / 60 / 60) % 24); 
    const m = Math.floor((remaining / 1000 / 60) % 60);
    const s = Math.floor((remaining / 1000 ) % 60); 
    day.innerHTML = d;
    hour.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(xmasCountdown, 1000);
let  playSound2 =() =>{
    let audio2 = new Audio("audios/sleighbells.wav");
    audio2.play();
};