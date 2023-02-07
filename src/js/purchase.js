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

let buttonVoltar = document.getElementById('btn-voltar')

let btnAdicionarNoCarrinho = document.getElementById('btn-carrinho')
let abaItemNoCarrinho = document.getElementById('produto-carrinho')
let btnVoltarCarrinho = document.getElementById('btn-voltar-carrinho')
class AbaCompraCelular {
    constructor() {
      this.addClickEvent();
    }

    addClickEvent() {
        function exibirAbaCelular() {
            if (containerCelular.style.display == 'block') {
             siteApp.style.display = 'block';
             compraProduto.style.display = 'none';
            }else{
             siteApp.style.display = 'none';
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
        containerCelular.addEventListener('click', exibirAbaCelular)
    }
}
class AbaCompraTenis {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
      function exibirAbaTenis() {
        if (containerTenis.style.display == 'block') {
          siteApp.style.display = 'block';
          compraProduto.style.display = 'none';
        }else{
          siteApp.style.display = 'none';
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
      containerTenis.addEventListener('click', exibirAbaTenis);
    }
}
class AbaCompraFone {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
        function abaCompraFone() {
            if (containerFone.style.display == 'block') {
                siteApp.style.display = 'block';
                compraProduto.style.display = 'none';
            }else{
                siteApp.style.display = 'none';
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
        containerFone.addEventListener('click', abaCompraFone);
    }
}
class AbaCompraNotebook {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
        function abaCompraNotebook() {
            if (containerNotebook.style.display == 'block') {
                siteApp.style.display = 'block';
                compraProduto.style.display = 'none';
            }else{
                siteApp.style.display = 'none';
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
        containerNotebook.addEventListener('click', abaCompraNotebook);
    }
}
class AbaCompraMouse {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
        function abaCompraMouse() {
            if (containerMouse.style.display == 'block') {
                siteApp.style.display = 'block';
                compraProduto.style.display = 'none';
            }else{
                siteApp.style.display = 'none';
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
        containerMouse.addEventListener('click', abaCompraMouse);
    }
}
class AbaCompraBola {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
        function abaCompraBola() {
            if (containerBola.style.display == 'block') {
                siteApp.style.display = 'block';
                compraProduto.style.display = 'none';
            }else{
                siteApp.style.display = 'none';
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
        containerBola.addEventListener('click', abaCompraBola);
    }
}
class AbaCompraRelogio {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
        function abaCompraRelogio() {
            if (containerRelogio.style.display == 'block') {
                siteApp.style.display = 'block';
                compraProduto.style.display = 'none';
            }else{
                siteApp.style.display = 'none';
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
        containerRelogio.addEventListener('click', abaCompraRelogio);
    }
}
class AbaComprarCelularTwo {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
        function abaCompraCelularTwo() {
            if (containerCelularTwo.style.display == 'block') {
                siteApp.style.display = 'block';
                compraProduto.style.display = 'none';
            }else{
                siteApp.style.display = 'none';
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
        containerCelularTwo.addEventListener('click', abaCompraCelularTwo);
    }
}
class BtnVoltarPagina {
    constructor() {
      this.addClickEvent();
    }
  
    addClickEvent() {
        function funcaoParaVoltarPagina() {
            if (siteApp.style.display = 'none'){
                siteApp.style.display = 'block';
                compraProduto.style.display = 'none';
            }else{
                siteApp.style.display = 'none';
                compraProduto.style.display = 'block';
            }
        }
        buttonVoltar.addEventListener('click', funcaoParaVoltarPagina);
    }
}
class salvaItemLoja {
    constructor() {
        this.addClickEvents();
    }

    addClickEvents() {
        for (let i = 1; i <= 8; i++) {
            const button = document.querySelector(`#favoritaProduto${i}`);
            button.style.color = "rgb(155, 155, 155)";
            button.addEventListener("click", () => {
                button.style.color = button.style.color === "rgb(155, 155, 155)" ? "red" : "rgb(155, 155, 155)";
            });
        }
    }
}

class adicionarItemAoCarrinho {
    constructor() {
        this.addClickEvent();
    }

    addClickEvent() {
        btnAdicionarNoCarrinho.addEventListener("click", () => {
            if (compraProduto.style.display = 'block') {
                compraProduto.style.display = 'none';
                abaItemNoCarrinho.style.display = 'block';
            }
        })
        btnVoltarCarrinho.addEventListener("click", () => {
            if (compraProduto.style.display = 'none') {
                compraProduto.style.display = 'block';
                abaItemNoCarrinho.style.display = 'none';
            }
        })
    }
}

const abasComprar = {
    AbaCompraCelular,
    AbaCompraTenis,
    AbaCompraFone,
    AbaCompraNotebook,
    AbaCompraMouse,
    AbaCompraBola,
    AbaCompraRelogio,
    AbaComprarCelularTwo,
    BtnVoltarPagina,
    salvaItemLoja,
    adicionarItemAoCarrinho,
}

export default abasComprar