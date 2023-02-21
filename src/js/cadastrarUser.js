let inputCadastrarNomeUser = document.getElementById("input-nome-cadastrar")
let inputCadastrarSobrenomeUser = document.getElementById("input-sobrenome-cadastrar")
let inputCadastrarSenhaUser = document.getElementById("input-senha-cadastrar")

let inputObrigatorio = document.getElementById("input-obrigatorio")

let btnCadastrar = document.getElementById("btn-cadastrar")

class CadastrarUsuario {
    constructor() {
        this.addUsuario();
    }

    addUsuario() {
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
    CadastrarUsuario
}

export default logarUsuario
