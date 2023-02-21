let inputCadastrarNomeUser = document.getElementById("input-nome-cadastrar")
let inputCadastrarSobrenomeUser = document.getElementById("input-sobrenome-cadastrar")
let inputCadastrarSenhaUser = document.getElementById("input-senha-cadastrar")

let inputObrigatorio = document.getElementById("input-obrigatorio")

let btnCadastrar = document.getElementById("btn-cadastrar")

let formLogin = document.getElementById("form-login")
let formCadastrar = document.getElementById("form-cadastrar")

class Usuario {
    constructor() {
        this.CadastrarUsuario();
    }

    CadastrarUsuario() {
        btnCadastrar.addEventListener("click", () => {
            if(inputCadastrarNomeUser.value && inputCadastrarSobrenomeUser.value != "") {
                let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

                listaUser.push(
                    {
                        nomeCad: inputCadastrarNomeUser.value,
                        usuarioCad: inputCadastrarSobrenomeUser.value,
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

}

const logarUsuario = {
    Usuario
}

export default logarUsuario
