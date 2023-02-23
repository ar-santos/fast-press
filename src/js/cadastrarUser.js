let inputCadastrarNomeUser = document.getElementById("input-nome-cadastrar")
let inputCadastrarSobrenomeUser = document.getElementById("input-sobrenome-cadastrar")
let inputCadastrarSenhaUser = document.getElementById("input-senha-cadastrar")

let inputObrigatorio = document.getElementById("input-obrigatorio")

let btnCadastrar = document.getElementById("btn-cadastrar")

let formLogin = document.getElementById("form-login")
let formCadastrar = document.getElementById("form-cadastrar")

let inputLoginNome = document.getElementById("input-login-nome")
let inputLoginSenha = document.getElementById("input-login-senha")
let campoObrigatorioLogin = document.getElementById("campo-obrigatorio-login")
let campoUsuarioLogado = document.getElementById("campo-usuario-logado")
let btnEntrar = document.getElementById("btn-entrar")
class Usuario {
    constructor() {
        this.CadastrarUsuario();
        this.acessarUsuario();
    }

    CadastrarUsuario() {
        btnCadastrar.addEventListener("click", () => {
            if(inputCadastrarNomeUser.value && inputCadastrarSobrenomeUser.value !="") {
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

                if (inputObrigatorio.style.display = 'flex') {
                    inputObrigatorio.style.display = 'none'
                    formLogin.style.display = 'flex'
                    formCadastrar.style.display = 'none'
                }

            }else{
                if (inputObrigatorio.style.display = 'none') {
                    inputObrigatorio.style.display = 'flex'
                }
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

                if (campoUsuarioLogado.style.display = 'none') {
                    campoUsuarioLogado.style.display = 'flex';
                }
                
                if (campoObrigatorioLogin.style.display = 'flex') {
                    campoObrigatorioLogin.style.display = 'none';
                }

                inputLoginNome.value = ''
                inputLoginSenha.value = ''
                
            }else {

                if (campoObrigatorioLogin.style.display = 'none') {
                    campoObrigatorioLogin.style.display = 'flex';
                }

                if (campoUsuarioLogado.style.display = 'flex') {
                    campoUsuarioLogado.style.display = 'none';
                }

                inputLoginNome.value = ''
                inputLoginSenha.value = ''

            }
        })
    }

}

const logarUsuario = {
    Usuario
}

export default logarUsuario
