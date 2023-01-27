let siteApp = document.getElementById('esconder-app')
let compraProduto = document.getElementById('compra-produto')

let containerCelular = document.getElementById('container-celular')
let containerCompraCelular = document.getElementById('compra-produto-celular')

let containerTenis = document.getElementById('container-tenis')
let containerCompraTenis = document.getElementById('compra-produto-tenis')

let containerFone = document.getElementById('container-fone')
let containerCompraFone = document.getElementById('compra-produto-fone')

let containerNotebook = document.getElementById('container-notebook')
let containerCompraNotebook = document.getElementById('compra-produto-notebook')

let containerMouse = document.getElementById('container-mouse')
let containerCompraMouse = document.getElementById('compra-produto-mouse')

let containerBola = document.getElementById('container-bola')
let containerCompraBola = document.getElementById('compra-produto-bola')

let containerRelogio = document.getElementById('container-relogio')
let containerCompraRelogio = document.getElementById('compra-produto-relogio')

let containerCelularTwo = document.getElementById('container-celularTwo')
let containerCompraCelularTwo = document.getElementById('compra-produto-celularTwo')

function abaCompraCelular() {
    if (containerCelular.style.display == 'block') {
        siteApp.style.display = 'block';
        containerCelular.style.display = 'block';
        containerCompraCelular.style.display = 'none';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerCelular.style.display = 'none';
        containerCompraTenis.style.display = 'none';
        containerCompraFone.style.display = 'none';
        containerCompraNotebook.style.display = 'none';
        containerCompraMouse.style.display = 'none';
        containerCompraBola.style.display = 'none';
        containerCompraRelogio.style.display = 'none';
        containerCompraCelularTwo.style.display = 'none';
        containerCompraCelular.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

function abaCompraTenis() {
    if (containerTenis.style.display == 'block') {
        siteApp.style.display = 'block';
        containerTenis.style.display = 'block';
        containerCompraTenis.style.display = 'none';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerTenis.style.display = 'none';
        containerCompraCelular.style.display = 'none';
        containerCompraFone.style.display = 'none';
        containerCompraNotebook.style.display = 'none';
        containerCompraMouse.style.display = 'none';
        containerCompraBola.style.display = 'none';
        containerCompraRelogio.style.display = 'none';
        containerCompraCelularTwo.style.display = 'none';
        containerCompraTenis.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

function abaCompraFone() {
    if (containerFone.style.display == 'block') {
        siteApp.style.display = 'block';
        containerFone.style.display = 'block';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerFone.style.display = 'none';
        containerCompraCelular.style.display = 'none';
        containerCompraTenis.style.display = 'none';
        containerCompraNotebook.style.display = 'none';
        containerCompraMouse.style.display = 'none';
        containerCompraBola.style.display = 'none';
        containerCompraRelogio.style.display = 'none';
        containerCompraCelularTwo.style.display = 'none';
        containerCompraFone.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

function abaCompraNotebook() {
    if (containerNotebook.style.display == 'block') {
        siteApp.style.display = 'block';
        containerNotebok.style.display = 'block';
        containerCompraTenis.style.display = 'none';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerFone.style.display = 'none';
        containerCompraCelular.style.display = 'none';
        containerCompraTenis.style.display = 'none';
        containerCompraFone.style.display = 'none';
        containerCompraMouse.style.display = 'none';
        containerCompraBola.style.display = 'none';
        containerCompraRelogio.style.display = 'none';
        containerCompraCelularTwo.style.display = 'none';
        containerCompraNotebook.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

function abaCompraMouse() {
    if (containerMouse.style.display == 'block') {
        siteApp.style.display = 'block';
        containerMouse.style.display = 'block';
        containerCompraTenis.style.display = 'none';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerFone.style.display = 'none';
        containerCompraCelular.style.display = 'none';
        containerCompraTenis.style.display = 'none';
        containerCompraFone.style.display = 'none';
        containerCompraNotebook.style.display = 'none';
        containerCompraBola.style.display = 'none';
        containerCompraRelogio.style.display = 'none';
        containerCompraCelularTwo.style.display = 'none';
        containerCompraMouse.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

function abaCompraBola() {
    if (containerBola.style.display == 'block') {
        siteApp.style.display = 'block';
        containerBola.style.display = 'block';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerFone.style.display = 'none';
        containerCompraCelular.style.display = 'none';
        containerCompraTenis.style.display = 'none';
        containerCompraFone.style.display = 'none';
        containerCompraNotebook.style.display = 'none';
        containerCompraMouse.style.display = 'none';
        containerCompraRelogio.style.display = 'none';
        containerCompraCelularTwo.style.display = 'none';
        containerCompraBola.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

function abaCompraRelogio() {
    if (containerRelogio.style.display == 'block') {
        siteApp.style.display = 'block';
        containerRelogio.style.display = 'block';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerFone.style.display = 'none';
        containerCompraCelular.style.display = 'none';
        containerCompraTenis.style.display = 'none';
        containerCompraFone.style.display = 'none';
        containerCompraNotebook.style.display = 'none';
        containerCompraMouse.style.display = 'none';
        containerCompraBola.style.display = 'none';
        containerCompraCelularTwo.style.display = 'none';
        containerCompraRelogio.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

function abaCompraCelularTwo() {
    if (containerCelularTwo.style.display == 'block') {
        siteApp.style.display = 'block';
        containerCelularTwo.style.display = 'block';
        compraProduto.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerFone.style.display = 'none';
        containerCompraCelular.style.display = 'none';
        containerCompraTenis.style.display = 'none';
        containerCompraFone.style.display = 'none';
        containerCompraNotebook.style.display = 'none';
        containerCompraMouse.style.display = 'none';
        containerCompraBola.style.display = 'none';
        containerCompraRelogio.style.display = 'none';
        containerCompraCelularTwo.style.display = 'block';
        compraProduto.style.display = 'block';
    }
}

const abasComprar = {
    abaCompraCelular,
    abaCompraTenis,
    abaCompraFone,
    abaCompraNotebook,
    abaCompraMouse,
    abaCompraBola,
    abaCompraRelogio,
    abaCompraCelularTwo,
}

export default abasComprar