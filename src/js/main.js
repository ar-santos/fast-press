import funcoesBanner from "./banner.js"
import avaliacaoClientes from "./star.js"
import abasComprar from "./purchase.js"

let btnCarroseLeft = document.getElementById('btn-carrosel-left')
let btnCarroselRight = document.getElementById('btn-carrosel-right')

let containerCelular = document.getElementById('container-celular')
let containerTenis = document.getElementById('container-tenis')
let containerFone = document.getElementById('container-fone')
let containerNotebook = document.getElementById('container-notebook')
let containerMouse = document.getElementById('container-mouse')
let containerBola = document.getElementById('container-bola')
let containerRelogio = document.getElementById('container-relogio')
let containerCelularTwo = document.getElementById('container-celularTwo')

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
    abasComprar.abaCompraCelular()
}

containerCelular.addEventListener('click', exibirAbaCompraCelular)

function exibirAbaCompraTenis() {
    abasComprar.abaCompraTenis()
}

containerTenis.addEventListener('click', exibirAbaCompraTenis)

function exibirAbaCompraFone() {
    abasComprar.abaCompraFone()
}

containerFone.addEventListener('click', exibirAbaCompraFone)

function exibirAbaCompraNotebook() {
    abasComprar.abaCompraNotebook()
}

containerNotebook.addEventListener('click', exibirAbaCompraNotebook)

function exibirAbaCompraMouse() {
    abasComprar.abaCompraMouse()
}

containerMouse.addEventListener('click', exibirAbaCompraMouse)

function exibirAbaCompraBola() {
    abasComprar.abaCompraBola()
}

containerBola.addEventListener('click', exibirAbaCompraBola)

function exibirAbaCompraRelogio() {
    abasComprar.abaCompraRelogio()
}

containerRelogio.addEventListener('click', exibirAbaCompraRelogio)

function exibirAbaCompraTwo() {
    abasComprar.abaCompraCelularTwo()
}

containerCelularTwo.addEventListener('click', exibirAbaCompraTwo)