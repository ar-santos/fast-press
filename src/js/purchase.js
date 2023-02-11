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
let containerCarrinhoCelular = document.getElementById('carrinho-celular')
let btnVoltarCarrinho = document.getElementById('btn-voltar-carrinho')


let btnAdicionarNoCarrinhoTenis = document.getElementById('btn-adicionar-carrinho-tenis')
let containerCarrinhoTenis = document.getElementById('carrinho-tenis')
let btnVoltarCarrinhoTenis = document.getElementById('btn-voltar-carrinho-tenis')

let btnAdicionarNoCarrinhofone = document.getElementById('btn-adicionar-carrinho-fone')
let containerCarrinhoFone = document.getElementById('carrinho-fone')
let btnVoltarCarrinhoFone = document.getElementById('btn-voltar-carrinho-fone')

let btnAdicionarNoCarrinhoNotebook = document.getElementById('btn-adicionar-carrinho-notebook')
let containerCarrinhoNotebook = document.getElementById('carrinho-notebook')
let btnVoltarCarrinhoNotebook = document.getElementById('btn-voltar-carrinho-notebook')

let btnAdicionarNoCarrinhoMouse = document.getElementById('btn-adicionar-carrinho-mouse')
let containerCarrinhoMouse = document.getElementById('carrinho-mouse')
let btnVoltarCarrinhoMouse = document.getElementById('btn-voltar-carrinho-mouse')

let btnAdicionarNoCarrinhoBola = document.getElementById('btn-adicionar-carrinho-bola')
let containerCarrinhoBola = document.getElementById('carrinho-bola')
let btnVoltarCarrinhoBola = document.getElementById('btn-voltar-carrinho-bola')

let btnAdicionarNoCarrinhoRelogio = document.getElementById('btn-adicionar-carrinho-relogio')
let containerCarrinhoRelogio = document.getElementById('carrinho-relogio')
let btnVoltarCarrinhoRelogio = document.getElementById('btn-voltar-carrinho-relogio')

let btnAdicionarNoCarrinhoCelularTwo = document.getElementById('btn-adicionar-carrinho-celularTwo')
let containerCarrinhoCelularTwo = document.getElementById('carrinho-celularTwo')
let btnVoltarCarrinhoCelularTwo = document.getElementById('btn-voltar-carrinho-celularTwo')


let abaItemNoCarrinho = document.getElementById('produto-carrinho')
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
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoTenis.style.display = 'none';
        containerCarrinhoCelular.style.display = 'block';
        containerCarrinhoFone.style.display = 'none';
        containerCarrinhoNotebook.style.display = 'none';
        containerCarrinhoMouse.style.display = 'none';
        containerCarrinhoBola.style.display = 'none';
        containerCarrinhoRelogio.style.display = 'none';
        containerCarrinhoCelularTwo.style.display = 'none';
      });
  
      btnAdicionarNoCarrinhoTenis.addEventListener("click", () => {
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoTenis.style.display = 'block';
        containerCarrinhoCelular.style.display = 'none';
        containerCarrinhoFone.style.display = 'none';
        containerCarrinhoNotebook.style.display = 'none';
        containerCarrinhoMouse.style.display = 'none';
        containerCarrinhoBola.style.display = 'none';
        containerCarrinhoRelogio.style.display = 'none';
        containerCarrinhoCelularTwo.style.display = 'none';
      });
      
      btnAdicionarNoCarrinhofone.addEventListener("click", () => {
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoFone.style.display = 'block';
        containerCarrinhoTenis.style.display = 'none';
        containerCarrinhoCelular.style.display = 'none';
        containerCarrinhoNotebook.style.display = 'none';
        containerCarrinhoMouse.style.display = 'none';
        containerCarrinhoBola.style.display = 'none';
        containerCarrinhoRelogio.style.display = 'none';
        containerCarrinhoCelularTwo.style.display = 'none';
      });

      btnAdicionarNoCarrinhoNotebook.addEventListener("click", () => {
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoNotebook.style.display = 'block';
        containerCarrinhoFone.style.display = 'none';
        containerCarrinhoTenis.style.display = 'none';
        containerCarrinhoCelular.style.display = 'none';
        containerCarrinhoMouse.style.display = 'none';
        containerCarrinhoBola.style.display = 'none';
        containerCarrinhoRelogio.style.display = 'none';
        containerCarrinhoCelularTwo.style.display = 'none';
      });

      btnAdicionarNoCarrinhoMouse.addEventListener("click", () => {
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoMouse.style.display = 'block';
        containerCarrinhoNotebook.style.display = 'none';
        containerCarrinhoFone.style.display = 'none';
        containerCarrinhoTenis.style.display = 'none';
        containerCarrinhoCelular.style.display = 'none';
        containerCarrinhoBola.style.display = 'none';
        containerCarrinhoRelogio.style.display = 'none';
        containerCarrinhoCelularTwo.style.display = 'none';
      });

      btnAdicionarNoCarrinhoBola.addEventListener("click", () => {
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoBola.style.display = 'block';
        containerCarrinhoMouse.style.display = 'none';
        containerCarrinhoNotebook.style.display = 'none';
        containerCarrinhoFone.style.display = 'none';
        containerCarrinhoTenis.style.display = 'none';
        containerCarrinhoCelular.style.display = 'none';
        containerCarrinhoRelogio.style.display = 'none';
        containerCarrinhoCelularTwo.style.display = 'none';
      });
      btnAdicionarNoCarrinhoRelogio.addEventListener("click", () => {
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoRelogio.style.display = 'block';
        containerCarrinhoBola.style.display = 'none';
        containerCarrinhoMouse.style.display = 'none';
        containerCarrinhoNotebook.style.display = 'none';
        containerCarrinhoFone.style.display = 'none';
        containerCarrinhoTenis.style.display = 'none';
        containerCarrinhoCelular.style.display = 'none';
        containerCarrinhoCelularTwo.style.display = 'none';
      });
      btnAdicionarNoCarrinhoCelularTwo.addEventListener("click", () => {
        compraProduto.style.display = 'none';
        abaItemNoCarrinho.style.display = 'block';
        containerCarrinhoCelularTwo.style.display = 'block';
        containerCarrinhoRelogio.style.display = 'none';
        containerCarrinhoBola.style.display = 'none';
        containerCarrinhoMouse.style.display = 'none';
        containerCarrinhoNotebook.style.display = 'none';
        containerCarrinhoFone.style.display = 'none';
        containerCarrinhoTenis.style.display = 'none';
        containerCarrinhoCelular.style.display = 'none';
      });
  
    btnVoltarCarrinho.addEventListener("click", () => {
        if (compraProduto.style.display = 'none') {
            compraProduto.style.display = 'block';
            abaItemNoCarrinho.style.display = 'none';
        }
    })
    btnVoltarCarrinhoTenis.addEventListener("click", () => {
        if (compraProduto.style.display = 'none') {
            compraProduto.style.display = 'block';
            abaItemNoCarrinho.style.display = 'none';
        }
    })

    btnVoltarCarrinhoFone.addEventListener("click", () => {
        if (compraProduto.style.display = 'none') {
            compraProduto.style.display = 'block';
            abaItemNoCarrinho.style.display = 'none';
        }
    })
    btnVoltarCarrinhoNotebook.addEventListener("click", () => {
        if (compraProduto.style.display = 'none') {
            compraProduto.style.display = 'block';
            abaItemNoCarrinho.style.display = 'none';
        }
    })
    btnVoltarCarrinhoMouse.addEventListener("click", () => {
        if (compraProduto.style.display = 'none') {
            compraProduto.style.display = 'block';
            abaItemNoCarrinho.style.display = 'none';
        }
    })
    btnVoltarCarrinhoBola.addEventListener("click", () => {
        if (compraProduto.style.display = 'none') {
            compraProduto.style.display = 'block';
            abaItemNoCarrinho.style.display = 'none';
        }
    })
    btnVoltarCarrinhoRelogio.addEventListener("click", () => {
        if (compraProduto.style.display = 'none') {
            compraProduto.style.display = 'block';
            abaItemNoCarrinho.style.display = 'none';
        }
    })
    btnVoltarCarrinhoCelularTwo.addEventListener("click", () => {
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