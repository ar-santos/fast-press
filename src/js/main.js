import funcoesBanner from "./banner.js"
import avaliacaoClientes from "./star.js"
import abasComprar from "./purchase.js"

let btnCarroseLeft = document.getElementById('btn-carrosel-left')
let btnCarroselRight = document.getElementById('btn-carrosel-right')

function carroselGallery() {
    funcoesBanner.carousel()
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

new abasComprar.AbaCompraCelular();
new abasComprar.AbaCompraTenis();
new abasComprar.AbaCompraFone();
new abasComprar.AbaCompraNotebook();
new abasComprar.AbaCompraMouse();
new abasComprar.AbaCompraBola();
new abasComprar.AbaCompraRelogio();
new abasComprar.AbaComprarCelularTwo();
new abasComprar.BtnVoltarPagina();
new abasComprar.salvaItemLoja();
new abasComprar.adicionarItemAoCarrinho();