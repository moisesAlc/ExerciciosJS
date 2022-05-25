(() => {
    const alerta = document.querySelector('[data-alerta]')
    const alerta_texto = document.querySelector('[data-alerta-texto]')

    const inputCep = document.querySelector('[data-cep')
    const rua = document.querySelector('[data-rua')
    const complemento = document.querySelector('[data-complemento')
    const bairro = document.querySelector('[data-bairro')
    const cidade = document.querySelector('[data-cidade')
    const estado = document.querySelector('[data-estado')

    const btnPesquisar = document.querySelector('[data-pesquisa]')
    const btnLimpar = document.querySelector('[data-limpa]')


    btnPesquisar.addEventListener('click', evento => {

        evento.preventDefault()

        const valorCep = inputCep.value

        const url = `https://viacep.com.br/ws/${valorCep}/json/`

        console.log(url);

        fetch(url).then(resposta => {
            return resposta.json();
        })
            .then(data => {
                atribuirCampos(data);
            })
            .catch(e => {
                alerta_texto.innerText = "Não foi possível concluir: " + e.message
                alerta.classList.remove('escondido')
                setTimeout(() => { alerta.classList.add('escondido') }, 3100);

            })
    })

    btnLimpar.addEventListener('click', evento => {
        limparCampos()
    })

    function atribuirCampos(dados) {
        rua.value = dados.logradouro
        complemento.value = dados.complemento
        bairro.value = dados.bairro
        cidade.value = dados.localidade
        estado.value = dados.uf

        complemento.focus()
        complemento.select()
    }

    function limparCampos() {
        rua.value = ''
        complemento.value = ''
        bairro.value = ''
        cidade.value = ''
        estado.value = ''
        inputCep.value = ''
        inputCep.focus()
    }
})()