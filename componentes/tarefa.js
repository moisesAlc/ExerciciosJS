import TextoTarefa from './textoTarefa.js'
import Editar from './editar.js'
import Concluir from './concluir.js'
import Deletar from './deletar.js'


const Tarefa = (valor) => {
    const tarefa = document.createElement('div')
    tarefa.classList.add('row', 'p-2', 'm-2', 'border-bottom')
    tarefa.setAttribute('data-tarefa', valor)
    tarefa.appendChild(TextoTarefa(valor))
    tarefa.appendChild(Editar())
    tarefa.appendChild(Concluir())
    tarefa.appendChild(Deletar())

    return tarefa
}

export default Tarefa