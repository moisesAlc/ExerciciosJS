const TextoTarefa = (valor) => {

    const divTextoTarefa = document.createElement('div')
    divTextoTarefa.classList.add('col')
    
    const inputTexto = document.createElement('input')
    inputTexto.classList.add('form-control','bg-dark')
    inputTexto.setAttribute('type','text')
    inputTexto.setAttribute('value',valor)
    inputTexto.setAttribute('readonly','')

    inputTexto.addEventListener(
        'keydown',
        (evento) => {
            if (evento.key == 'Enter'){
                inputTexto.setAttribute('readonly','')
            divTextoTarefa.focus()
            }
        })
        

    divTextoTarefa.appendChild(inputTexto)

    return divTextoTarefa
}

export default TextoTarefa

{/* <div class="col form-outline form-white">
                <input type="text" id="formWhite" class="form-control" />
                <label class="form-label" for="formWhite">Comprar presente</label>
              </div> */}
