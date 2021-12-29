import Botao from "./botao.js"

const Concluir = () => {

    return Botao('success','Concluir','check',clickConcluir)
}

const clickConcluir = (evento) => {
    
    if (evento.target.localName == 'i'){
        const texto = evento
            .target.parentElement
                .parentElement.parentElement.firstChild
        texto.classList.toggle('riscado')
    }else if(evento.target.localName == 'button'){
        const texto = evento
            .target.parentElement.parentElement.firstChild
        texto.classList.toggle('riscado')
    }
}

export default Concluir
