import BotaoFacade from "./botao.js"

const Deletar = () => {
    return BotaoFacade('danger','Deletar','trash-alt',clickDeletar)
}

const clickDeletar = (evento) => {
    
    if (evento.target.localName == 'i'){
        evento
            .target.parentElement
                .parentElement.parentElement.remove()
    }else if(evento.target.localName == 'button'){
        evento
            .target.parentElement.parentElement.remove()
    }
}

export default Deletar