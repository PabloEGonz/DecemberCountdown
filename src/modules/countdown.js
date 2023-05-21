const december = new Date("December 1 2023 00:00:00");
const countdown = () => {
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

const xmas = new Date("December 24 2023 00:00:00");

const xmasCountdown = () => {
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
export { countdown, xmasCountdown };