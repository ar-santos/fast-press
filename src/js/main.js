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