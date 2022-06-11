const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
]
const numeroRespostas = respostas.length
const pergunta = document.getElementById('input')
const botao = document.getElementById('button')
const divResposta = document.getElementById('div-resposta')

botao.addEventListener("click", fazerPergunta)

function fazerPergunta() {
    if (pergunta.value == "") {
        alert("Digite sua pergunta!")
        return
    }

    const numeroAleatorio= Math.floor(Math.random() * numeroRespostas)

    divResposta.innerHTML = `<h3>${pergunta.value}</h3>` + `<h2>${respostas[numeroAleatorio]}</h2>` 
    divResposta.style.opacity = 1
    
    setTimeout(function() {
        divResposta.style.opacity = 0
        pergunta.value = ""

    }, 3000)
}

