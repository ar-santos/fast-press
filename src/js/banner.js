const bannerimgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel() {
    idx++;
    if(idx > img.length - 1) {
        idx = 0;
    }

    bannerimgs.style.transform = `translateX(${-idx * 100}%)`;
}

function btnLeftBanner() {
    idx--;
    if(idx > img.length - 0) {
        idx = 0;
    }

    bannerimgs.style.transform = `translateX(${-idx * 100}%)`;
    setInterval(5800);
}

function btnRightBanner() {
    idx++;
    if(idx > img.length - 1) {
        idx = 0;
    }

    bannerimgs.style.transform = `translateX(${-idx * 100}%)`;
    setInterval(5800);
}

setInterval(carrosel, 5800);

const funcoesBanner = {
    carrosel,
    btnLeftBanner,
    btnRightBanner,
}

export default funcoesBanner