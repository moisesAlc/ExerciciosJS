const IdAleatorio = () => {
    
    return "id"+Math.round(Math.random()*1000)+new Date().getSeconds()

}

export default IdAleatorio