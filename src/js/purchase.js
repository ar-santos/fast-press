let containerCelular = document.getElementById('container-celular')
let siteApp = document.getElementById('esconder-app')
let containerCompra = document.getElementById('compra-produto')

function abaCompraCelular() {
    if (containerCelular.style.display == 'block') {
        siteApp.style.display = 'block';
        containerCelular.style.display = 'block';
        containerCompra.style.display = 'none';
    }else{
        siteApp.style.display = 'none';
        containerCelular.style.display = 'none';
        containerCompra.style.display = 'block';
    }
}

export default abaCompraCelular