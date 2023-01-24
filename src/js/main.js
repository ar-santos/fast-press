import funcoesBanner from "./banner.js"

let btnCarroseLeft = document.getElementById('btn-carrosel-left')
let btnCarroselRight = document.getElementById('btn-carrosel-right')

function carroselGallery() {
    funcoesBanner.carrosel()
}

carroselGallery()

function executaFuncaoBtnLeft() {
    funcoesBanner.btnLeftBanner()
}

btnCarroseLeft.addEventListener('click', executaFuncaoBtnLeft )

function executaFuncaoBtnRight() {
    funcoesBanner.btnRightBanner()
}

btnCarroselRight.addEventListener('click', executaFuncaoBtnRight)

const containerStar = '<svg height="18" viewBox="0 0 50 50" width="18"><polygon fill="#f2c832" points="25,3.553 30.695,18.321 46.5,19.173   34.214,29.152 38.287,44.447 25,35.848 11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 "></polygon></svg>';

function avaliacaoClientes(){
    const addStar = document.querySelectorAll('.inform-avaliacao')

    addStar.forEach(element => {
        for(let i = 0; i <= 4; i++){
            element.insertAdjacentHTML('afterend',containerStar)
        }
    });
}

avaliacaoClientes()