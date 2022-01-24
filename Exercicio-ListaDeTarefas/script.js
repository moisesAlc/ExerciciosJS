import Tarefa from './componentes/tarefa.js'

(() => {

    const criarTarefa = function(evento){   
        
        evento.preventDefault()

        const valor = document
            .querySelector('[data-entrada]')
                .value

        if (valor.length < 5){
            document.querySelector('[data-aviso').classList.remove('d-none')
            document.querySelector('[data-entrada]').value = ''
            setTimeout(() => {
                document.querySelector('[data-aviso').classList.add('d-none')
                document.querySelector('[data-entrada]').focus()
            }, 2000);
            return
        } 
        
        document.querySelector('[data-entrada]').value = ''
        
        const lista = document
            .querySelector('[data-lista]')


        lista.appendChild(Tarefa(valor))
    }

    const inputAdicionar = document
            .querySelector('[data-entrada]')
    inputAdicionar.addEventListener(
        'submit',
        criarTarefa
        )

    const btnAdicionar = document
        .querySelector('[data-adicionar]')

    const lista = document
        .querySelector('[data-lista]')
    
    btnAdicionar.addEventListener(
        'click', criarTarefa)

})()