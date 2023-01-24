import funcoesBanner from "./banner.js"
import avaliacaoClientes from "./star.js"
import abaCompraCelular from "./purchase.js"

let btnCarroseLeft = document.getElementById('btn-carrosel-left')
let btnCarroselRight = document.getElementById('btn-carrosel-right')
let containerCelular = document.getElementById('container-celular')

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

avaliacaoClientes()

function exibirAbaCompraCelular() {
    abaCompraCelular()
}

containerCelular.addEventListener('click', exibirAbaCompraCelular)