const bannerimgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
let intervalId;

function carousel() {
    idx++;
    if(idx >= img.length) {
        idx = 0;
    }

    bannerimgs.style.transform = `translateX(-${idx * 100}%)`;
}

function btnLeftBanner() {
    clearInterval(intervalId);
    idx--;
    if(idx < 0) {
        idx = img.length - 1;
    }

    bannerimgs.style.transform = `translateX(-${idx * 100}%)`;
    intervalId = setInterval(carousel, 5800);
}

function btnRightBanner() {
    clearInterval(intervalId);
    idx++;
    if(idx >= img.length) {
        idx = 0;
    }

    bannerimgs.style.transform = `translateX(-${idx * 100}%)`;
    intervalId = setInterval(carousel, 5800);
}

intervalId = setInterval(carousel, 5800);

const funcoesBanner = {
    carousel,
    btnLeftBanner,
    btnRightBanner,
};

export default funcoesBanner;
