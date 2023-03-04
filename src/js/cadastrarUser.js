import abasComprar from "./purchase.js"

let inputCadastrarNomeUser = document.getElementById("input-nome-cadastrar")
let inputCadastrarSobrenomeUser = document.getElementById("input-sobrenome-cadastrar")
let inputCadastrarSenhaUser = document.getElementById("input-senha-cadastrar")
let btnCadastrar = document.getElementById("btn-cadastrar")

let inputLoginNome = document.getElementById("input-login-nome")
let inputLoginSenha = document.getElementById("input-login-senha")
let btnEntrar = document.getElementById("btn-entrar")

let campoObrigatorioNome = document.getElementById("campo-obrigatorio-login-input")
let campoObrigatorioSenha = document.getElementById("campo-obrigatorio-login-senha")

let campoObrigatorioLogin = document.getElementById("campo-obrigatorio-login")

class Usuario {
    constructor() {
        this.CadastrarUsuario();
        this.acessarUsuario();
    }

    CadastrarUsuario() {
        btnCadastrar.addEventListener("click", () => {
            if(inputCadastrarNomeUser.value && inputCadastrarSobrenomeUser.value && inputCadastrarSenhaUser.value !="") {
                let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

                listaUser.push(
                    {
                        nomeCad: inputCadastrarNomeUser.value,
                        sobrenomeCad: inputCadastrarSobrenomeUser.value,
                        senhaCad: inputCadastrarSenhaUser.value
                    }
                )

                localStorage.setItem('listaUser', JSON.stringify(listaUser))

                inputCadastrarNomeUser.value = ''
                inputCadastrarSobrenomeUser.value = ''
                inputCadastrarSenhaUser.value = ''

                new abasComprar.trocarAbaCadastroEntrada();
                
            }else{

                new abasComprar.validacaoCamposCadastro();
               
            }
        });
    }

    acessarUsuario() {
        btnEntrar.addEventListener("click", () => {
            let listaUsuarioCadastrado = []

            let userValid = {
                nome: '',
                sobrenome: '',
                senha: '',
            }

            listaUsuarioCadastrado = JSON.parse(localStorage.getItem('listaUser'))

            if(inputLoginNome.value.length < 3){
                campoObrigatorioNome.style.display = 'flex'
                inputLoginNome.focus()
                campoObrigatorioLogin.style.display = 'none'
                inputLoginNome.style.borderColor = 'red';
                return;
            }else{
                inputLoginNome.style.borderColor = '#58c22e';
                campoObrigatorioNome.style.display = 'none'
            }
            
            if(inputLoginSenha.value.length < 8){
                campoObrigatorioSenha.style.display = 'flex';
                inputLoginSenha.focus()
                campoObrigatorioLogin.style.display = 'none'
                inputLoginSenha.style.borderColor = 'red';
                return;
            }else{
                inputLoginSenha.style.borderColor = '#58c22e';
                campoObrigatorioSenha.style.display = 'none'
            }
            
            listaUsuarioCadastrado.forEach((item) => {
                if(inputLoginNome.value == item.nomeCad && inputLoginSenha.value == item.senhaCad){
                    userValid = {
                        nome: item.nomeCad,
                        sobrenome: item.sobrenomeCad,
                        senha: item.senhaCad
                    }
                }
            })
            
            if(inputLoginNome.value == userValid.nome && inputLoginSenha.value == userValid.senha){
                new abasComprar.ValidacaoCamposUsuarioLogado();
            }else{
                new abasComprar.ValidacaoCamposObrigatorio();
            }
            

        })
    }

}

const logarUsuario = {
    Usuario
}

export default logarUsuario
