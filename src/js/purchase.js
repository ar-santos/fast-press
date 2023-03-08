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

let finalizaCarrinhoBtn = document.getElementById('finaliza-carrinho-btn')
let formLogin = document.getElementById('form-login')
let btnVoltarLogin = document.getElementById('btn-voltar-login')

let formCadastrar = document.getElementById('form-cadastrar')
let btnCadastrarLogin = document.getElementById('btn-criarNovaConta')
let btnEntrarConta = document.getElementById('btn-entrarConta')
let btnVoltarCadastrar = document.getElementById('btn-voltar-cadastrar')
let inputCadastrarNomeUser = document.getElementById("input-nome-cadastrar")
let inputCadastrarSobrenomeUser = document.getElementById("input-sobrenome-cadastrar")
let inputCadastrarSenhaUser = document.getElementById("input-senha-cadastrar")

let inputLoginNome = document.getElementById("input-login-nome")
let inputLoginSenha = document.getElementById("input-login-senha")
let inputObrigatorio = document.getElementById("input-obrigatorio")
let campoObrigatorioLogin = document.getElementById("campo-obrigatorio-login")
let campoUsuarioLogadoLogin = document.getElementById("campo-usuario-logado")
let campoObrigatorioInput = document.getElementById("campo-obrigatorio-login-input")

let campoObrigatorioNome = document.getElementById("campo-obrigatorio-login-input")
let campoObrigatorioSenha = document.getElementById("campo-obrigatorio-login-senha")

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
    finalizaCarrinhoBtn.addEventListener('click', () => {
        if (compraProduto.style.display = 'none') {
            abaItemNoCarrinho.style.display = 'none';
            formLogin.style.display = 'flex';
        }
    })
    btnVoltarLogin.addEventListener('click', () => {
        if (formLogin.style.display = 'flex') {
            abaItemNoCarrinho.style.display = 'block';
            formLogin.style.display = 'none';
        }
    })
    btnCadastrarLogin.addEventListener('click', () => {
        if (formCadastrar.style.display = 'none') {
            formCadastrar.style.display = 'flex';
            formLogin.style.display = 'none';
            campoObrigatorioNome.style.display = 'none'
            campoObrigatorioSenha.style.display = 'none'
            campoObrigatorioLogin.style.display = 'none'
            inputLoginSenha.style.borderColor = 'rgba(0, 0, 0, 0.074)';
            inputLoginNome.style.borderColor = 'rgba(0, 0, 0, 0.074)';
            inputLoginNome.value = ''
            inputLoginSenha.value = ''
        }
    })
    btnVoltarCadastrar.addEventListener('click', () => {
        if (formCadastrar.style.display = 'flex') {
            formCadastrar.style.display = 'none';
            formLogin.style.display = 'flex';
        }
    })
    btnEntrarConta.addEventListener('click', () => {
        if (formCadastrar.style.display = 'flex') {
            formCadastrar.style.display = 'none';
            formLogin.style.display = 'flex';
        }
    })
    }
}
class ValidacaoCamposUsuarioLogado {
    constructor() {
        this.campoUsuarioLogado();
    }

    campoUsuarioLogado(){
        
        if (campoUsuarioLogadoLogin.style.display = 'none') {
            campoUsuarioLogadoLogin.style.display = 'flex';
            campoObrigatorioInput.style.display = 'none';
            campoObrigatorioLogin.style.display = 'none';
            inputLoginSenha.style.borderColor = 'rgba(0, 0, 0, 0.074)';
            inputLoginNome.style.borderColor = 'rgba(0, 0, 0, 0.074)';
            inputLoginNome.value = ''
            inputLoginSenha.value = ''
        }
    }

}
class ValidacaoCamposObrigatorio{
    constructor() {
        this.campoObrigatorioLogin();
    }

   campoObrigatorioLogin(){
        
        if (campoObrigatorioLogin.style.display = 'none') {
            campoObrigatorioLogin.style.display = 'flex';
            campoObrigatorioInput.style.display = 'none';
            campoUsuarioLogadoLogin.style.display = 'none';
            inputLoginNome.focus();
            inputLoginSenha.style.borderColor = 'red';
            inputLoginNome.style.borderColor = 'red';
        }

        inputLoginNome.value = ''
        inputLoginSenha.value = ''
    }
}
class ValidacaoCamposObrigatorioInput{
    constructor() {
        this.campoObrigatorioLogin();
    }

   campoObrigatorioLogin(){
        if (campoObrigatorioInput.style.display = 'none') {
            campoObrigatorioInput.style.display = 'flex';

            if (inputLoginNome.value === '') {
                inputLoginNome.focus();
                inputLoginNome.style.borderColor = 'red';
              } else if (inputLoginSenha.value === '') {
                inputLoginSenha.focus();
                inputLoginSenha.style.borderColor = 'red';
            }

            campoObrigatorioLogin.style.display = 'none';
            campoUsuarioLogadoLogin.style.display = 'none';
        }
    }
}
class trocarAbaCadastroEntrada{
    constructor() {
        this.transicaoAba();
    }

    transicaoAba() {
        if (formCadastrar.style.display = 'flex') {
            formLogin.style.display = 'flex'
            formCadastrar.style.display = 'none'
            inputCadastrarNomeUser.style.borderColor = 'rgba(0, 0, 0, 0.074)';
            inputCadastrarSobrenomeUser.style.borderColor = 'rgba(0, 0, 0, 0.074)';
            inputCadastrarSenhaUser.style.borderColor = 'rgba(0, 0, 0, 0.074)';
        }
    }
}
// class validacaoCamposCadastro{
//     constructor() {
//         this.validaoCampo();
//     }

//     validaoCampo() {
//         if (inputObrigatorio.style.display = 'none') {

//             if (inputCadastrarNomeUser.value === '') {
//                 inputCadastrarNomeUser.focus();
//                 inputCadastrarNomeUser.style.borderColor = 'red';
//               } else if (inputCadastrarSobrenomeUser.value === '') {
//                 inputCadastrarSobrenomeUser.focus();
//                 inputCadastrarSobrenomeUser.style.borderColor = 'red';
//             } else if (inputCadastrarSenhaUser.value === '') {
//                 inputCadastrarSenhaUser.focus();
//                 inputCadastrarSenhaUser.style.borderColor = 'red';
//             } 

//             inputObrigatorio.style.display = 'flex'
//         }
//     }
// }

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
    ValidacaoCamposUsuarioLogado,
    ValidacaoCamposObrigatorio,
    ValidacaoCamposObrigatorioInput,
    trocarAbaCadastroEntrada,
}

export default abasComprar