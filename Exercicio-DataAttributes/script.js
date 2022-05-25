const esconderConteudos = function(){
    const conteudos = document.querySelectorAll("[data-conteudo]")
    conteudos.forEach( conteudo => {
        conteudo.classList.add('d-none')
    })
}

const mostrarConteudo = function(valor){
    // valor será "entrar" ou "cadastrar"
    // hardcoded
    conteudo = document.querySelector(`[data-conteudo=${valor}]`)
    conteudo.classList.remove('d-none')
}

const desativarAbas = function(){
    const abas = document.querySelectorAll("[data-aba]")
    abas.forEach( aba => {
        aba.classList.remove('ativa')
    })
}

const ativarAba = function(valor){
    // valor será "entrar" ou "cadastrar"
    // hardcoded
    aba = document.querySelector(`[data-aba=${valor}]`)
    aba.classList.add('ativa')
}

const fnClicaBotao = function(elemento){
    esconderConteudos()
    desativarAbas()
    valor = elemento.getAttribute('data-aba')
    mostrarConteudo(valor)
    ativarAba(valor)
}

abas = document.querySelectorAll('[data-aba]')
abas.forEach( aba => {
    aba.addEventListener('click',()=>{
        fnClicaBotao(aba)
    })
})