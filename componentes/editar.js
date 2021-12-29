import Botao from "./botao.js"

const Editar = () => {
    return Botao('primary', 'Editar', 'edit', clickEditar)
}

const clickEditar = (evento) => {

    if (evento.target.localName == 'i') {

        const texto = evento
            .target.parentElement
            .parentElement.parentElement.firstChild.firstChild

        texto.removeAttribute('readonly')
        texto.focus()
        console.log("A");
    } else if (evento.target.localName == 'button') {
        const texto = evento
            .target.parentElement.parentElement.firstChild.firstChild
        console.log(texto);
        texto.removeAttribute('readonly')
        texto.focus()
        console.log("B");
    }
    console.log("C");
}


export default Editar