const BotaoFacade = (classeCorFundo, texto, icone, funcao) => {
    const divBotao = document.createElement('div')
    divBotao.classList.add('col-2','text-center')

    const botao = document.createElement('button')
    botao.classList.add('btn',`btn-${classeCorFundo}`)
    botao.innerText = texto

    const iconeBotao = document.createElement('i')
    iconeBotao.classList.add('fas',`fa-${icone}`, 'ms-2')

    botao.appendChild(iconeBotao)

    botao
    .addEventListener(
        'click',
        funcao
    )

    divBotao.appendChild(botao)

    return divBotao
}

export default BotaoFacade