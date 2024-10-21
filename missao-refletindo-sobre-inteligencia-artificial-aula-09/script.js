const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma prática saudável para manter o corpo ativo?",
        alternativas: [
            {
                texto: "Caminhadas regularmente",
                afirmacao: " É uma excelente forma de exercício cardiovascular, melhorando as circulações e trabalhando a musculatura."
            },
            {
                texto: "Praticar exercícios de academia",
                afirmacao: "melhora a flexibilidade e ajuda a prevenir lesões."
            }
        ]
    },
    {
        enunciado: "O que pode ajudar a manter uma boa saúde mental?",
        alternativas: [
            {
                texto: "Meditar regularmente",
                afirmacao: "a meditação reduz o estresse e melhora a concentração e o bem estar emocional "
            },
            {
                texto: "Manter o ciclo de sono regular",
                afirmacao: " Um sono adequado é fundamental para a saúde mental, pois ajuda a regular o humor e a energia diária."
            }
        ]
    },
    {
        enunciado: "Qual hábito contribui para uma alimentação mais saudável?",
        alternativas: [
            {
                texto: "Comer frutas e vegetais com mais frequência",
                afirmacao: " São fontes de minerais, vitaminas, fibras e outros compostos bioativos, essenciais para a manutenção do peso apropriado e da saúde. "
            },
            {
                texto: "Beber bastante água ao longo do dia",
                afirmacao: "Manter-se hidratado é crucial para o bom funcionamento do corpo, incluindo o sistema digestivo e a pele."
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
